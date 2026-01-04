# Simon Says Game
The `started` variable is used to identify whether or not a new game has been started.

`scores` array is used to store all scores and to maintain the value of a highscore.

Line 14: `started` only needs to change when a new game begins and not at every key press during the game.

Line 16: `h3` needs to be reinitialised because the previous game may have altered it.

Line 18: Sabhi games ke liye `userInput` waale event listeners ek hi baar add honge. Nhi toh har game mei same event listeners dobaara add ho jaayenge unn hi elements par.

Lines 26 to 28: Choosing random color to flash and add in game sequence. At every level, only one new color needs to be flashed.
Every color must be mentioned in id and class both because id is used to identify each color- to select it whereas class is used to modify it, for example, to flash a color. A color can only be flashed if that color is also mentioned in the class attribute because `gameFlash` is also a class. If the color is not specified as class but only in id, then the div won't flash because `gameFlash` is a class selector and the color's id selector will gain higher preference because of specificity.

Lines 30 to 35: We need to set time out for new div flashing as level upgrades. Otherwise after the `userSeq` is matched with `gameSeq`, the last user input will overlap with the new flash and the user will not be able to see/distinguish the new flash. Especially if the new flash matches with the last flash from the user.

Lines 45 to 47: They ensure that once the game ends and the score is displayed, the user does not click on any of the divs instead of pressing a keyboard button. In case that happens, an alert is displayed. The condition for this is when the length of `gameSeq` is 0 and the user clicks on a div.

Lines 62 to 70: The `step` variable ranges from 0 to level-1 for each level. It is used to compare the values of `userSeq` and `gameSeq` at every step. If the values equate, there are 2 cases. One in which the user is at the final step in that level and is waiting for level upgradation and the next game flash, or, the user is in the middle of entering the pattern for that level.

Lines 80 to 84: Reset the game so a new game may begin.

Line 85: We can also write `setTimeout(levelUp, 1000);` instead of `started = false` but then we won't need a keypress to restart.