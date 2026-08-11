I didn't quite understand Docker the way I wanted to.

For me, Docker was just this basic container-type thing where the configuration of my project is frozen so that it runs the same way on every device. Which is partly correct, but there's a much bigger picture and a lot more use cases than I initially realized.

## More Than Just Images and Containers

One of the biggest advantages I noticed was how naturally everything became separated. Instead of treating my project as one giant application, I suddenly had a frontend image, a backend image, and a database image. Updating one service no longer meant rebuilding everything else.

Docker also taught me how to be more efficient when building applications. It introduced me to the concept of standalone builds, which significantly reduce image size while making builds faster and deployments more efficient.

## docker-compose.yml

Along the way, I learned about containers, images, and volumes—how a single image can be used to create multiple containers, why database data should always live in volumes so it isn't lost when containers are recreated, and a whole lot more.

I also ended up writing a Docker Compose file for my project because, let's be honest, nobody wants to start every service one by one every single time. And oh boy, the amount of customization and configuration Docker Compose offers is unreal.

The fact that you can copy only the files you actually need into an image, define entire application stacks in a single file, and have Docker provide its own built-in DNS service so containers can talk to each other by name without worrying about IP addresses or routing... that's just insane. It genuinely made me appreciate how much work Docker hides behind such a simple interface.

After creating the Compose file and tweaking it until everything worked, I finally got all the services running on my localhost. Seeing the frontend, backend, and database come up together with a single command was incredibly satisfying.

## moving file to the server

Now, all that was left was to move the codebase to the server along with the Compose file and see if everything worked outside my local machine.

Aaaand... I did exactly that.

I copied the project over, set up an SSH connection so GitHub and my server could trust each other (I'll cover that in a future episode because it's a pretty neat topic on its own), and got everything ready for the real test, and it worked !!!

## problem with exposing ports

There was just one problem left.

At this point, the application was only accessible on **localhost**. On my Windows machine, only my Windows machine could access it. On the server, only the server itself could access it.

Sure, I could expose it using the server's IP address and access it from another device, but exposing your application directly over an IP isn't exactly a great idea. It works for testing, but it's definitely not how you'd want to host something that other people can access.

And i stumbeld upon a thing called nginx and apparently, the stack wasn't quite complete yet..
