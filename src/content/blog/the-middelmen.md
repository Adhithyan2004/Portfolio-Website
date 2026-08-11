It turns out the internet is full of middlemen. Some forward requests, some establish trust, and some simply make communication possible. I learned about two of those middlemen: Nginx and SSH.

Learning about networking and all that stuff during my college days was always like, _"Meh... it's just protocols, IP addresses, and a bunch of theory. Nothing much, man."_

But after I started building my own server to host websites, those same boring concepts started hitting me in a way I never expected they would.

So, after learning a bit about Docker and writing my Compose file, GPT suggested that I use Nginx as a reverse proxy. It also explained why exposing my services and their ports directly to the internet isn't considered a good practice, the attack surface is more in that way.

## nginx and proxying

Nginx turned out to be far better than I expected. It acts as a reverse proxy, sitting between the browser and my services. Instead of exposing my services directly, the browser communicates with Nginx, and Nginx forwards the requests to the appropriate service behind the scenes. thats cool right!

So I wrote my first Nginx configuration, and voilà—I had all my services running behind Nginx, hidden from the browser.

I thought that was all Nginx did. Nope... and that honestly blew my mind.

With Nginx in front of all my services, I only expose one public entry point. This keeps things simple and easier to scale. It also makes HTTPS and custom domains much easier to handle—I’ll cover that in a later post.

I also discovered that Nginx can do things like load balancing and caching. I haven't needed those yet, but it's nice knowing the same tool can grow with my projects.

## SSH – The Other Middleman

As I mentioned in my previous episode, let's talk about SSH authentication.

I also connected my Windows machine to the server over SSH because, honestly, working on two separate laptops was a hassle.

Being able to SSH into the server directly from my Windows machine meant I could do everything from one place without constantly switching devices, and it made the whole workflow so much better.

Anddd I did the same with GitHub. So basically, we need to create an SSH key pair on the server and give the public key to GitHub. From then on, GitHub knows that the server is actually someone it can trust.

How, you ask?

It sends a challenge that can only be solved using the server's private key. The server signs the challenge with its private key, GitHub verifies it using the public key it already has, and if everything matches, it knows the server is trustworthy.

Yeah... I don't think I explained that very well, but that's basically the idea lol.

Now all that's left for me is to buy a domain, hook everything up, and finally deploy my website... right??
