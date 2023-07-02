This is a social media clone app made with React and Firebase.

The application is supposed to imitate Instagram. It is developed as a web app,
an it functions best on a browser. I have also added CSS for a mobile screen,
however I'm only having an issue with the address bar appearing and disappearing
when you scroll (it makes the bottom of the screen where there are three buttons
scroll down, you have to scroll up the address bar so they appear again).

- You can create an account and log in using the credentials. 
- I haven't made a friend/follow system, so all users that have signed up are
  available to you
- You can start chats with the users, and send them text and photos via the chat.
- You can also make text/photo posts, whic other users can comment on (I haven't
  implemented likes yet).
- You can check out your own profile to see what you have posted and sign out 
  from there (you can't check other people's profiles, I have made placeholder
  components for this feature but haven't made any functionalities for it yet).
- I was also planning to make a notification system, however I just made some 
  placeholder content for it and havent made it functional yet.

Known bugs that I haven't been able to fix:
- Can't post photo posts or send photos in chat when you're on mobile. The photo
  gets uploaded in storage, but for some reason the message/post info doesn't 
  get saved in the database
- If you want to send a single photo two times in a row, it won't get sent the
  second time you try it.
- On occasion, if you send a photo via chat it gets sent two times in a row.

Assets used:

Fonts:

  - https://fonts.google.com/specimen/Roboto
  - Beautiful People by Billy Argel Fonts: https://www.fontspace.com/billy-argel-fonts