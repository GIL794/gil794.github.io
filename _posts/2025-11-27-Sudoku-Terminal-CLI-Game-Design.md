---
layout: post
title: "Sudoku Terminal: The Art of CLI Game Design"
date: 2025-11-27
time: "09:00"
categories: [Game Development, Python, CLI]
tags: [sudoku, python, terminal games, cli applications, puzzle games, algorithm design, interactive cli]
excerpt: "Explore the elegant world of terminal-based gaming with Sudoku Terminal. Learn how to create engaging interactive experiences without a GUI, using nothing but Python and your command line."
---

Hey there, Gabriele here!

Who says you need flashy graphics to create engaging games? Today, I'm diving into **[Sudoku Terminal](https://github.com/GIL794/Sudoku-Terminal)**—a fully-featured Sudoku game that runs entirely in your terminal. It's a testament to how powerful command-line interfaces can be when designed thoughtfully.

---

## **The Beauty of Terminal Games**

### **Why CLI Games Matter**

Terminal games aren't just nostalgic throwbacks—they have real advantages:

- ⚡ **Lightning Fast**: No graphics overhead
- 🖥️ **Universal**: Works on any system with a terminal
- 🔧 **SSH-Friendly**: Play remotely over network connections
- 📦 **Tiny Footprint**: Minimal resource usage
- 🎯 **Focus**: No distracting graphics, pure gameplay
- 🧑‍💻 **Developer-Friendly**: Perfect for programmers

**Plus, they teach you fundamental programming skills that transfer everywhere.**

### **The Terminal Advantage**

```python
# This simple code creates a rich interactive experience
import sys
import os

def clear_screen():
    """Cross-platform screen clearing"""
    os.system('cls' if os.name == 'nt' else 'clear')

def move_cursor(row, col):
    """Position cursor anywhere on screen"""
    print(f"\033[{row};{col}H", end='')

def color_text(text, color):
    """Add color to terminal output"""
    colors = {
        'red': '\033[91m',
        'green': '\033[92m',
        'blue': '\033[94m',
        'reset': '\033[0m'
    }
    return f"{colors[color]}{text}{colors['reset']}"
```

These simple tools create surprisingly rich experiences!

---

## **Game Overview: Sudoku Terminal**

### **Features**

A complete Sudoku implementation:

1. **Puzzle Generation**
   - Creates new 9×9 grids with unique solutions
   - Multiple difficulty levels
   - Ensures puzzles are solvable through logic

2. **Interactive Gameplay**
   - Navigate the grid with arrow keys
   - Enter numbers 1-9
   - Clear cells with backspace/delete
   - Immediate validation feedback

3. **Smart Features**
   - Input validation (prevents illegal moves)
   - Error checking and hints
   - Solution reveal option
   - Puzzle restart capability

4. **Clean Interface**
   - Visual grid with borders
   - Color-coded cells (fixed vs. editable)
   - Highlighted current position
   - Clear instructions and status

---

## **The Technical Foundation**

### **Sudoku Data Structure**

```python
class SudokuGame:
    def __init__(self):
        """Initialize a new Sudoku game"""
        # 9x9 grid, 0 represents empty cells
        self.grid = [[0 for _ in range(9)] for _ in range(9)]
        
        # Track which cells are fixed (part of the puzzle)
        self.fixed_cells = [[False for _ in range(9)] for _ in range(9)]
        
        # Current cursor position
        self.current_row = 0
        self.current_col = 0
        
        # Game state
        self.mistakes = 0
        self.hints_used = 0
```

**Design Decisions:**

- **2D List**: Natural representation of the grid
- **Fixed Cells Tracking**: Know which cells user can modify
- **Cursor Position**: Track where user is editing
- **Game Statistics**: Enhance engagement

### **Sudoku Rules Validation**

The core logic ensuring valid gameplay:

```python
def is_valid(grid, row, col, num):
    """
    Check if placing num at (row, col) violates Sudoku rules
    """
    # Check row
    for c in range(9):
        if grid[row][c] == num:
            return False
    
    # Check column
    for r in range(9):
        if grid[r][col] == num:
            return False
    
    # Check 3x3 box
    box_row = (row // 3) * 3
    box_col = (col // 3) * 3
    
    for r in range(box_row, box_row + 3):
        for c in range(box_col, box_col + 3):
            if grid[r][c] == num:
                return False
    
    return True
```

**Three Rules, One Function:**

1. **Row Uniqueness**: No duplicates in any row
2. **Column Uniqueness**: No duplicates in any column
3. **Box Uniqueness**: No duplicates in any 3×3 box

### **Puzzle Generation Algorithm**

Creating valid Sudoku puzzles is algorithmically interesting:

```python
def generate_puzzle(difficulty='medium'):
    """
    Generate a valid Sudoku puzzle
    
    Args:
        difficulty: 'easy' (40 clues), 'medium' (30 clues), 'hard' (25 clues)
    
    Returns:
        9x9 grid with unique solution
    """
    # Step 1: Generate complete valid solution
    solution = generate_complete_grid()
    
    # Step 2: Remove numbers based on difficulty
    clues_to_keep = {'easy': 40, 'medium': 30, 'hard': 25}[difficulty]
    puzzle = remove_numbers(solution, clues_to_keep)
    
    # Step 3: Verify puzzle has unique solution
    if count_solutions(puzzle) == 1:
        return puzzle
    else:
        # Regenerate if multiple solutions exist
        return generate_puzzle(difficulty)

def generate_complete_grid():
    """
    Generate a complete valid Sudoku grid using backtracking
    """
    grid = [[0 for _ in range(9)] for _ in range(9)]
    
    def fill_grid(row=0, col=0):
        # If reached end of grid, we're done
        if row == 9:
            return True
        
        # Move to next row if at end of current row
        if col == 9:
            return fill_grid(row + 1, 0)
        
        # Try numbers 1-9 in random order for variety
        numbers = list(range(1, 10))
        random.shuffle(numbers)
        
        for num in numbers:
            if is_valid(grid, row, col, num):
                grid[row][col] = num
                
                if fill_grid(row, col + 1):
                    return True
                
                grid[row][col] = 0  # Backtrack
        
        return False
    
    fill_grid()
    return grid

def remove_numbers(grid, clues_to_keep):
    """
    Remove numbers from complete grid while maintaining unique solution
    """
    puzzle = [row[:] for row in grid]  # Copy grid
    cells_to_remove = 81 - clues_to_keep
    
    removed = 0
    attempts = 0
    max_attempts = 100
    
    while removed < cells_to_remove and attempts < max_attempts:
        row = random.randint(0, 8)
        col = random.randint(0, 8)
        
        if puzzle[row][col] != 0:
            backup = puzzle[row][col]
            puzzle[row][col] = 0
            
            # Verify still has unique solution
            if count_solutions(puzzle) == 1:
                removed += 1
            else:
                puzzle[row][col] = backup  # Restore
            
            attempts += 1
    
    return puzzle
```

**Key Algorithm Features:**

- **Backtracking**: Efficient solution finding
- **Randomization**: Each puzzle feels unique
- **Uniqueness Verification**: Ensures exactly one solution
- **Difficulty Scaling**: Adjustable challenge level

---

## **Terminal UI Implementation**

### **Drawing the Grid**

```python
def draw_grid(grid, fixed_cells, current_row, current_col):
    """
    Draw the Sudoku grid with formatting
    """
    clear_screen()
    
    print("  ╔═══╤═══╤═══╦═══╤═══╤═══╦═══╤═══╤═══╗")
    
    for row in range(9):
        # Row separator
        if row == 3 or row == 6:
            print("  ╠═══╪═══╪═══╬═══╪═══╪═══╬═══╪═══╪═══╣")
        elif row != 0:
            print("  ╟───┼───┼───╫───┼───┼───╫───┼───┼───╢")
        
        # Draw row
        print("  ║", end="")
        for col in range(9):
            # Cell content
            if grid[row][col] == 0:
                cell = " "
            else:
                cell = str(grid[row][col])
            
            # Color coding
            if row == current_row and col == current_col:
                # Highlight current cell
                cell = color_text(cell, 'blue', bold=True)
            elif fixed_cells[row][col]:
                # Fixed cells in default color
                cell = cell
            else:
                # User-entered cells in green
                cell = color_text(cell, 'green')
            
            # Print with formatting
            print(f" {cell} ", end="")
            
            # Column separators
            if col == 2 or col == 5:
                print("║", end="")
            elif col == 8:
                print("║")
            else:
                print("│", end="")
    
    print("  ╚═══╧═══╧═══╩═══╧═══╧═══╩═══╧═══╧═══╝")
    print()
    print("Controls: Arrow keys to move, 1-9 to enter, Backspace to clear")
    print(f"Mistakes: {mistakes}, Hints used: {hints_used}")
```

**Visual Elements:**

- **Box Drawing Characters**: Unicode for clean borders
- **Color Coding**: Differentiate cell types
- **Cursor Highlighting**: Show current position
- **Status Information**: Track progress

### **Input Handling**

```python
import sys
import tty
import termios

def get_key():
    """
    Read a single keypress from terminal
    """
    fd = sys.stdin.fileno()
    old_settings = termios.tcgetattr(fd)
    try:
        tty.setraw(sys.stdin.fileno())
        ch = sys.stdin.read(1)
        
        # Handle arrow keys (multi-byte sequences)
        if ch == '\x1b':
            ch = sys.stdin.read(2)
            if ch == '[A': return 'UP'
            if ch == '[B': return 'DOWN'
            if ch == '[C': return 'RIGHT'
            if ch == '[D': return 'LEFT'
        
        return ch
    finally:
        termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)

def handle_input(game, key):
    """
    Process user input and update game state
    """
    row, col = game.current_row, game.current_col
    
    # Navigation
    if key == 'UP' and row > 0:
        game.current_row -= 1
    elif key == 'DOWN' and row < 8:
        game.current_row += 1
    elif key == 'LEFT' and col > 0:
        game.current_col -= 1
    elif key == 'RIGHT' and col < 8:
        game.current_col += 1
    
    # Number entry
    elif key in '123456789':
        if not game.fixed_cells[row][col]:
            num = int(key)
            if is_valid(game.grid, row, col, num):
                game.grid[row][col] = num
            else:
                game.mistakes += 1
                flash_error("Invalid move!")
    
    # Clear cell
    elif key in ['\x7f', '\x08']:  # Backspace/Delete
        if not game.fixed_cells[row][col]:
            game.grid[row][col] = 0
    
    # Hint
    elif key == 'h':
        provide_hint(game)
    
    # New game
    elif key == 'n':
        return new_game()
    
    # Quit
    elif key == 'q':
        return None
    
    return game
```

**Input Features:**

- **Arrow Key Navigation**: Intuitive cursor movement
- **Number Entry**: Direct digit input
- **Special Keys**: Backspace, hints, new game
- **Validation**: Prevent illegal moves
- **Feedback**: Immediate error notification

---

## **Getting Started**

### **Installation**

Super simple:

```bash
# Clone the repository
git clone https://github.com/GIL794/Sudoku-Terminal.git
cd Sudoku-Terminal

# Install dependencies (if any)
pip install -r Requirements.txt

# Run the game
python sudoku_terminal.py
```

### **System Requirements**

Minimal:
- Python 3.7 or higher
- Any terminal with Unicode support
- Keyboard (no mouse needed!)

Works perfectly on:
- Linux/Unix terminals
- macOS Terminal
- Windows Command Prompt
- WSL (Windows Subsystem for Linux)
- Remote SSH sessions

---

## **Advanced Features**

### **Hint System**

Intelligent hints that don't spoil the puzzle:

```python
def provide_hint(game):
    """
    Provide a helpful hint without solving the puzzle
    """
    # Find cells with only one possible value
    for row in range(9):
        for col in range(9):
            if game.grid[row][col] == 0:
                possible = get_possible_values(game.grid, row, col)
                
                if len(possible) == 1:
                    # Obvious move - fill it in
                    game.grid[row][col] = possible[0]
                    game.hints_used += 1
                    return True
    
    # No obvious moves - highlight a promising cell
    best_cell = find_cell_with_fewest_options(game.grid)
    if best_cell:
        game.current_row, game.current_col = best_cell
        flash_message(f"Try this cell - {len(get_possible_values(game.grid, *best_cell))} options")
        return True
    
    return False

def get_possible_values(grid, row, col):
    """
    Get all valid numbers for a cell
    """
    possible = set(range(1, 10))
    
    # Remove numbers in same row
    possible -= set(grid[row])
    
    # Remove numbers in same column
    possible -= {grid[r][col] for r in range(9)}
    
    # Remove numbers in same box
    box_row, box_col = (row // 3) * 3, (col // 3) * 3
    for r in range(box_row, box_row + 3):
        for c in range(box_col, box_col + 3):
            possible.discard(grid[r][c])
    
    return possible
```

### **Solution Verification**

```python
def is_complete(grid):
    """
    Check if puzzle is completely and correctly filled
    """
    # Check all cells filled
    for row in grid:
        if 0 in row:
            return False
    
    # Check all rows valid
    for row in range(9):
        if not is_valid_group([grid[row][c] for c in range(9)]):
            return False
    
    # Check all columns valid
    for col in range(9):
        if not is_valid_group([grid[r][col] for r in range(9)]):
            return False
    
    # Check all boxes valid
    for box_row in range(0, 9, 3):
        for box_col in range(0, 9, 3):
            box = []
            for r in range(box_row, box_row + 3):
                for c in range(box_col, box_col + 3):
                    box.append(grid[r][c])
            if not is_valid_group(box):
                return False
    
    return True

def is_valid_group(nums):
    """
    Check if a group of 9 numbers contains exactly 1-9
    """
    return set(nums) == set(range(1, 10))
```

---

## **CLI Design Best Practices**

### **1. Clear Visual Hierarchy**

```
  ╔═══╤═══╤═══╦═══╤═══╤═══╦═══╤═══╤═══╗
  ║ 5 │   │   ║   │ 7 │   ║   │   │   ║
  ╟───┼───┼───╫───┼───┼───╫───┼───┼───╢
  ║   │ 2 │   ║   │   │ 3 ║   │ 1 │   ║
```

**Principles:**

- **Box borders**: Heavy lines for 3×3 regions
- **Cell borders**: Light lines for individual cells
- **Spacing**: Consistent padding for readability
- **Alignment**: Perfect column alignment

### **2. Color Coding**

```python
# ANSI color codes
COLORS = {
    'fixed': '\033[37m',      # White - original puzzle
    'user': '\033[92m',       # Green - user entries
    'cursor': '\033[94m',     # Blue - current position
    'error': '\033[91m',      # Red - mistakes
    'reset': '\033[0m'        # Reset to default
}
```

### **3. Responsive Feedback**

```python
def flash_message(text, duration=2):
    """
    Show temporary message at bottom of screen
    """
    print(f"\n{color_text(text, 'blue', bold=True)}")
    time.sleep(duration)
    clear_line()
```

### **4. Keyboard Shortcuts**

| Key | Action |
|-----|--------|
| Arrow Keys | Navigate grid |
| 1-9 | Enter number |
| Backspace/Del | Clear cell |
| H | Get hint |
| N | New game |
| S | Show solution |
| Q | Quit |

---

## **Educational Value**

### **Programming Concepts**

Building this game teaches:

1. **Algorithm Design**: Backtracking, validation
2. **Data Structures**: 2D arrays, sets, dictionaries
3. **Terminal Control**: ANSI codes, cursor positioning
4. **Input Handling**: Keyboard events, non-blocking input
5. **State Management**: Game state tracking
6. **Error Handling**: Validation and recovery

### **Sudoku Strategy**

Players learn:

- **Naked Singles**: Cells with only one option
- **Hidden Singles**: Numbers that can only go in one place
- **Candidate Elimination**: Ruling out possibilities
- **Box-Line Reduction**: Advanced techniques
- **Logical Deduction**: Step-by-step reasoning

---

## **Extending the Game**

### **Ideas for Enhancement**

1. **Save/Load Games**
```python
import json

def save_game(game, filename):
    with open(filename, 'w') as f:
        json.dump({
            'grid': game.grid,
            'fixed_cells': game.fixed_cells,
            'current_pos': [game.current_row, game.current_col],
            'stats': {'mistakes': game.mistakes, 'hints': game.hints_used}
        }, f)
```

2. **Timer and Statistics**
```python
import time

start_time = time.time()
# ... gameplay ...
elapsed = time.time() - start_time
print(f"Completed in {int(elapsed // 60)}m {int(elapsed % 60)}s")
```

3. **Difficulty Selection**
```python
difficulties = {
    '1': ('easy', 40),
    '2': ('medium', 30),
    '3': ('hard', 25),
    '4': ('expert', 20)
}
```

4. **Undo/Redo**
```python
class GameHistory:
    def __init__(self):
        self.history = []
        self.position = -1
    
    def record(self, grid):
        self.history = self.history[:self.position + 1]
        self.history.append([row[:] for row in grid])
        self.position += 1
    
    def undo(self):
        if self.position > 0:
            self.position -= 1
            return self.history[self.position]
```

---

## **Why Terminal Games Matter**

### **Skills Development**

- **Pure Logic**: No graphics to hide behind
- **Efficient Code**: Performance matters in CLI
- **Cross-Platform**: Works anywhere
- **Remote-Friendly**: Play over SSH
- **Lightweight**: Minimal dependencies

### **Professional Applications**

Terminal UI skills apply to:
- System administration tools
- Development utilities
- Database clients
- Network monitoring
- Server management
- DevOps dashboards

---

## **Get Involved!**

**[Sudoku Terminal](https://github.com/GIL794/Sudoku-Terminal)** welcomes contributors:

- 🎮 **Play and provide feedback**
- 🐛 **Report bugs**
- ✨ **Suggest features**
- 📝 **Improve documentation**
- 🔧 **Submit pull requests**
- ⭐ **Star the repository**

---

## **Final Thoughts**

Terminal-based games prove that great gameplay doesn't require flashy graphics. With thoughtful design and clean code, you can create engaging experiences that work anywhere, on any system, over any connection.

Sudoku Terminal demonstrates how much you can accomplish with Python and a terminal—no frameworks, no dependencies, just pure programming elegance.

Whether you're learning to code, improving your Sudoku skills, or exploring CLI application development, this project offers valuable lessons wrapped in an enjoyable puzzle experience.

**Ready to play some Sudoku the programmer's way?** Clone the repo and start solving!

**Connect with me:**
- 🌐 Portfolio: [gil794.github.io](https://gil794.github.io)
- 💼 LinkedIn: [gabriele-iacopo-langellotto](https://www.linkedin.com/in/gabriele-iacopo-langellotto-aa7095a9)
- 🐙 GitHub: [@GIL794](https://github.com/GIL794)

Happy puzzling! 🧩

---

*This post is part of my series on practical programming projects. Stay tuned for more explorations of Python, algorithms, and creative problem-solving!*
