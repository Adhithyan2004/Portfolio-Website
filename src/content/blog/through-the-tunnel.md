After searching for a solution (I just GPT'd my way through it lol), I found that Cloudflare was the way to go.

The thing about CGNAT (Carrier-Grade Network Address Translation) is that it allows outgoing requests. Things like opening YouTube, calling an external API, downloading files, or even my server pulling code from GitHub all work just fine.

## Cloudefare tunnels

Cloudflare creates a secure tunnel that lets it communicate with my server even though it's sitting behind CGNAT.

The flow is roughly:

**Visitor → Cloudflare → Tunnel → My Server**

And the response follows the same path back.

But the cool part is, Cloudflare isn't actually punching through CGNAT.

It uses an already-existing connection that my server made to Cloudflare, and routes the incoming requests through that connection.

So I created an account on Cloudflare, tried installing Cloudflare Tunnel, and found out they provide stable Docker images for it.

So obviously, I installed it through Docker because at this point, I'm doing nearly everything with Docker—Postgres, Nginx, and even my database storage!

And I was able to test the tunnel quickly with a temporary tunnel and URL. I opened the URL using my phone's mobile data.

And oh boy... I finally did it.

A website, hosted from my own server, running behind my own network, and accessible to anyone on the internet.

That feeling was awesome.

The problem was, I definitely needed a domain—or maybe I didn't, but buying one seemed like the most feasible option.

Cloudflare's temporary tunnel gave me HTTPS and a random URL, but that URL wasn't something I could properly control or use as a permanent address.So there was no permanent URL that I could actually control.

All that's left now is to buy a domain, configure it, and point it to my server.

## The $0 Cloud

And that's it.

I started this whole thing with one simple goal: **host a website from my own server without spending a penny.**

And somehow, along the way, I ended up learning about Linux, Docker, networking, CGNAT, Nginx, SSH, Cloudflare, and a whole lot of things I never expected to touch.

But hey... I actually did it.

I hosted my own website. From my own server. Without paying for hosting.
