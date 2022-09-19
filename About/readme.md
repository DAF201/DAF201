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
> personal tools-site (I cannot guarentee it work still, I lost the private key in an SSD accident so I cannot access server):
>
> [https://blink-in.com](https://blink-in.com)
> 
> cookies/admin authorization required for APIs
>
>  for APIs, see [this](https://github.com/DAF201/DAF201/blob/main/APIs.pdf)
---
# Overview
---
> A current college student who is working on a BS degree of CS in UTD, who started with programming in May 2021 (My earlier college was mostly math classes). Experience with Network programming and Embedded devices. Personally prefer scripting languages but am okay with C++ (don't like C). Currently working for NTX Embedded part-time
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
> languages: python
> 
> SDK: VSC
>
> environment: ?(they don't let me participate real machine test)
>
> A Walmart inventory update script, some other scripts like this
> 
> ## A mini local network http server
>
> languages: node js
> 
> SDK: VSC
>
> environment: ?
>
> A mini server that read a local JSON file and returns it when received an HTTP request. Made for testing GraphQL.
>
> ## Home Assistant Control Drive for J-200
> 
> languages: python
> 
> SDK: VSC/HASS_VSC
> 
> environment: Raspberry pi with HASS OS (linux kernel, I managed to stopped the boosting once and the Linux shell shows up)
>
> Allows controlling the J-200(a wireless video decoder) on the Home Assistant platform in the local network using a browser or mobile app. Based on HTTP protocol.
> 
> ## Left because I was transferring from HCC(in Houston) to UTD(in Dallas)
---
> # NTX Embedded, Summer internship -> part-time, May 2022-? 
>
> this part was written Sep 2022 
>
> 2423 Welwood Drive, Carrollton, TX 75010
>
> ## follett: an embedded touch screen for water dispenser 
>
> languages: C
> 
> SDK: Microchip MPlab
> 
> environment: No OS
>
> Power on icon replacement function
> 
> some bug fixing
> 
> some testing
> 
> ---
> ## Wild Goose: an embedded touch screen for bear canning machine
> 
> languages: Lua
> 
> SDK: Crank storyboard
> 
> environment: Customized Linux for embedded device
> 
> Keypad function redesign (old one is too hard to use to me)
> 
> some new functions such as values backup
> 
> UI bugs fixing
> 
> some logic bugs fixing(overwrite)
> 
> ---
> 
> ## Brix: A Sugar machine touch screen? (I don't know what that do the machine does for sure, they never told me) 
>
> languages: Lua
> 
> SDK: Crank storyboard
> 
> environment: Customized Linux for embedded device
>
> task system redesign: a simulated task queue using Lua table. Allows to register tasks to the task queue, allows tasks to run once or forever, support task parameter from 0 to 5 for each task, and allows unregister forever running task by task id if needed
> 
> timer system overwrites: One timer and a task table. Allows to register task to the timer, to run the task with a wanted interval, support task parameter from 0 to 5 for each task, and allows unregister task by task id if needed
> 
> communication system overwrites: A more abstract function and reciver function that allows assigning starting register, number of registers to read/write, read/write different types of data, and can be registered into task system or timer to keep getting/posting data. Based on customized protocol over Modbus.
> 
> keypad redesign: The old one is pretty much an enum of where to put text and repeating steps... So I make a new one and reduced lines from 2000+ to about 200 to save my life from copying, pasting, and editing old code over and over when I need an input box
> 
> translation frame building: this is a built-in tool to read a CSV translate file and replace all text, but you need to set it up. (I came up with my own translation frame using JSON but the manager said we will stick with the built-in one...)
> 
> functions adding: mini functions like heartbeat service to ensure the communication quality
> 
> bugs fixing(basically overwrite old code, I don't want to look in to what is going on with function which try to enum all the possible situation)
> 
> testing
---
# Personal
---
> ## Toys: some toys I made when I was starting, most of them have a backup on GitHub or were lost in the SSD accident I mentioned earlier.
> 
> languages: Python, JavaScript, HTML
> 
> SDK: VSC
> 
> environment: Windows10
> 
> Pretty much "just for fun" one file micro project
> 
> ---
>
> ## Blink-in: my tools kit website, mean to bypass CN SNS inspection
>
> languages: Python, JavaScript, HTML, VBS
> 
> SDK: VSC
> 
> environment: AWS Windows 10 cloud server
> 
> ### functions: 
> 
>> blink-in: file transstorage, last about 6 months(no longer working due to database rules change)
>> 
>> storage a image/file less than 50 MB, return a 56 characters string which as a key to get image/file
>>
>> downloading still working for uploaded and not expired images/files
>>
>> you may try: MmJiMGY2ZDc5YzIwNDU1ZGM2OWRhNzAzMmVjMzZjNDJkZDQwMTFiMA== as file, inside is "discommunication alians.mp4". [screenshot](https://github.com/DAF201/DAF201/blob/main/About/Screenshot%20(90).png)(still alive at sep 2022)
>> 
>> how it works:
>> 
>> read file or image binary data, convert into a grayscale image and upload to an image database, then convert URL to string. [For example this one](https://i0.hdslb.com/bfs/album/d9e354fc694565993cb36af968949e317e7874e8.png)(still alive Sep 2022)
>> 
>
>> transcendence: small file to GIF
>> 
>> may not always work cause some SNS platform compress GIF
>> 
>> how it works:
>> 
>> very simple "binary adding", since some CN SNS platform does not compress or do redurentant data validation for small GIF.
>
>> cluster: insert words into words, pass hidden message via normal message
>> 
>> how it works:
>> 
>> see Unicode U+200B, I just made a way of encoding/decoding
>
>> white out: single direction URL linked nodes, each node can only be used once and it will generate a new node for it
>> 
>> how it works: 
>> 
>> similar to short URL, but will remove current node and create a new node each time a URL being accessed
>
>> retrieve: short URL
>>
>> how it works: 
>> 
>> same as hash
>
>> Control pannel: provide some remote control
>> 
>> [screenshot](https://github.com/DAF201/DAF201/blob/main/About/Screenshot%20(91).png)
