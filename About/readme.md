# My formal name is Fangzhou ye
sadly, many people say it just like "fungi"...
---
# general infomation
> Currently living in: <br>Allen, Texas, 75013
> 
> email: <br>DAF201@blink-in.com<br>fzy0429@gmail.com<br>1641853573@qq.com
> 
> cell phone:<br> (510)-513-9761 (text plz)
> 
> personal tools-site (I cannot guarentee it work still, I lost the private key in an accident so I cannot access server):
>
> [https://blink-in.com](https://blink-in.com)
> 
> cookies/admin authorization required for APIs
>
>  for APIs, see [this](https://github.com/DAF201/DAF201/blob/main/APIs.pdf)
---
# Overview
---
> A current college student who is working on a BS degree of CS in UTD, who started with programming in May 2021 (My earlier college was mostly math classes). Experience with Network programming and Embedded devices. Personally prefer scripting languages but am okay with C++ (don't like C). Currently working for NTX Embedded part-time.
---
# Schooling
> Houston community college: AS of CS(for transfer), 1300 Holman St, Houston, TX 77004 2019-2021
>
> University of Texas at Dallas: TX 75080, 2021-?, BS of CS, 800 W Campbell Rd, Richardson
---
# Experience
---
> # J-Tech Digital, INC: Summer internship, May-Aug 2021
> 
> 9807 Emily Ln, Suite 100, Stafford, TX 77477 (was at 12803 Park One Dr, Sugar Land, TX, 77478 when I was there)
> 
> ## Scripts:
> 
> environment: python, VSC
> 
> A Walmart inventory update script, some other scripts like this.
> 
> ## A mini local network http server
>
> environment: node js, VSC
>
> A mini server that read a local JSON file and returns it when received an HTTP request. Made for testing GraphQL.
>
> ## Home Assistant Control Drive for J-200
> 
> environment: python, VSC/HASS_VSC, Raspberry pi with HASS OS
>
> Allows controlling the J-200(a wireless video decoder) on the Home Assistant platform in the local network using a browser or mobile app. Based on HTTP protocol.
> 
> ## Left because I was transferring from HCC(in Houston) to UTD(in Dallas)
---
> # NTX Embedded, Summer internship -> part-time, May 2022-? (this part was written Sep 2022)
>
> 2423 Welwood Drive, Carrollton, TX 75010
>
> ## follett: an embedded touch screen for water dispenser 
>
> environment: C, SDK: Microchip MPlab, No OS
>
> Power on icon replacement function
> 
> some bug fixing
> 
> some testing
> 
> environment: Lua, SDK: Crank storyboard, Customized Linux for embedded device
>
> ## Wild Goose: an embedded touch screen for bear canning machine
>
> Keypad function redesign (old one is too hard to use to me)
> 
> some new functions such as values backup
> 
> UI bugs fixing
> 
> some logic bugs fixing.
> 
> ## Brix: A Sugar machine touch screen? (I don't know what that do the machine does for sure, they never told me) 
>
> environment: Lua, SDK: Crank storyboard, Customized Linux for embedded device
>
> task system redesign: a simulated task queue using Lua table. Allows to register tasks to the task queue, allows tasks to run once or forever, support task parameter from 0 to 5 for each task, and allows unregister forever running task by task id if needed.
> 
> timer system overwrites: One timer and a task table. Allows to register task to the timer, to run the task with a wanted interval, support task parameter from 0 to 5 for each task, and allows unregister task by task id if needed. 
> 
> communication system overwrites: A more abstract function and reciver function that allows assigning starting register, number of registers to read/write, read/write different types of data, and can be registered into task system or timer to keep getting/posting data. Based on customized protocol over Modbus.
> 
> keypad redesign: The old one is pretty much an enum of where to put text and repeating steps... So I make a new one and reduced lines from 2000+ to about 200 to save my life from copying, pasting, and editing old code over and over when I need an input box.
> 
> translation frame building: this is a built-in tool to read a CSV translate file and replace all text, but you need to set it up. (I came up with my own translation frame using JSON but the manager said we will stick with the built-in one...)
> 
> functions adding: mini functions like heartbeat service to ensure the communication quality
> 
> bugs fixing
> 
> testing
---
