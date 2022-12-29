# To Do Lists
- [ ] In Home path: if not login -> navigate to Login Path
- [ ] Display Profile path using username (in App, MainNav, Profile, Constant.js)
- [ ] Tweet page (Have back button)
- [ ] Home, Explore, Bookmarks, Settings -> Tweets, Profile, Trend, 
# Props passed through Components and through Styled Components
## Inside Components: ({a, b, c, ...props})
- a, b, c
    - use if components must have that props (for easy to debug later and understand why call that component)
    - props that will be used and called inside that component for doing something
    - for instructing how to use the props that have unclear names
# Name
- Styled + Component
    ex: StyledButton, StyledInput, etc
# Folder Instruction
- Containers: for storing simple containers without any specific requiring styles (add background color, color, etc)
# Detailed Instruction for each component
## Button
### **Nav Button**
| Screen Size | First Component | Second Component |
| ------- | ---- | ---- |
| Desktop | Icon | Text |
| Mobile | Icon |  |
#### ***Props meaning***
| Props Name | Meaning |
| ------- | ---- |
| icon | Icon component |
| text | Text content |
| children | other components if have any special components |
| onClick | onClick function |
| horizontalPadding | horizontal spaces before and after the content |
| ...props | other styling props if available |