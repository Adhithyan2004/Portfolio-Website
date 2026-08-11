After all that—setting up Nginx and hiding the ports—I was excited because I thought I was finally going to deploy my website without spending a single penny or relying on free tiers.

But just blindly throwing everything onto the internet felt wrong, so I started learning how packets actually travel from the internet to my machine.

And oh boy, did I learn a lot.

As I dug deeper, I learned that packets don't magically know where my server is. They travel through routers, ISPs, and a bunch of systems in between.

I found out that my router wasn't actually exposed to the internet the way I thought it was. To receive packets from anywhere in the world, I needed a public IP address.

I ran a few scripts on my server, found what I thought was my public IP, and even set up port forwarding in my ISP's admin page. Then, I switched to mobile data and tried accessing it from outside my network.

But there was a problem (no shit, Sherlock).

The website didn't load, and I was completely confused. That's when I noticed that my "public" IP address started with 10.

A quick search later, I discovered that addresses starting with 10.x.x.x are private addresses—they aren't reachable from the public internet.

And that could only mean one thing: it wasn't actually my router's public IP.

## CGNAT: The Big Dawg

Most Indian ISPs use something called **CGNAT** (_Carrier-Grade Network Address Translation_).

What does it do? Instead of giving every router its own public IP address, the ISP groups multiple routers in an area behind a single public IP. Why, you ask?

Back in the early days of the internet, people thought that a 32-bit address space would be more than enough for everyone. Turns out, they were very, very wrong. IPv4 addresses are running out, and because of that, dedicated public IPs have become expensive.

Anddd the problem is, I can't forward requests to my server anymore because I don't control the public IPv4 address—my ISP does.

There are a few ways around this. I could simply request a public IP from my ISP, but that costs extra money and completely destroys the motto of this series:hosting a website without spending a penny.

Turns out, the internet had one more trick up its sleeve: Cloudflare.
