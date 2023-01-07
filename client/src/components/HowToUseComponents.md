# To Do Lists
- [x] Display Profile path using username (in App, MainNav, Profile, Constant.js)
- [ ] Do I need to use username from useParam to get user info (MainNav, Profile)
- [ ] Tweet page (Have back button)
- [x] Home, Explore, Bookmarks, Settings -> Tweets, Profile, Trend, 
- [ ] change defaultUser to dynamic user (in Profile, MainNav, TweetContent, FollowerList, FollowingList, SubPage)
  - App.jsx: user (**you**) (should render here instead of Home.jsx)
  - Main: user (**you**)
  - Profile: whole user (attributes: name, numberOfTweets)
    - MainInfoProfile: user (attributes: name, username, bio, createdAt, location, website, following list - `following` (count), follower list - `followers` (count), isYou, isFollowing)
      - CustomModal - UpdateProfileForm: user (attr: banner, avatar, name, bio, location, website, dob)
      - FollowList: user
        - FollowButton: user (isFollowing)
  - TweetContent: user (2 types: retweet user + tweet user)
  - ProfileSubPage: user - to get tweet list, tweet and replies list, follower list, following list
- [ ] change follower
- [ ] change defaultReply
- [ ] change defaultTweetList to dynamic tweet (tweetlist in ProfileSubpage)
- [ ] Restyle date of birth input later
- [X] Is Pinned Tweet in back or fronend??????
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