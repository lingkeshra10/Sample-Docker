## Docker Installation Guide

### Install on RHEL/Debian

1. Before installing the docker, we need to update the server to be up to date.

2. After the update was completed, we proceeded to install yum-utils in the servers.

3. After we add the yum-utils in the servers, we need to add the docker repo for installing docker service-related items.

4. Then we successfully install yum-utils, adding the docker repo in the servers, now we will proceed to install docker inside the servers.

5. Next we need to start and enable the docker service.
   
6. After the Docker daemon starts, and run the command below to check the Docker status.

7. Next we need to add the firewall rules for the docker service to run.

8. Then, we need to add the docker-compose command to the server for the services to run in the stack.

9. Finally, we need to activate the docker swarm mode in the docker services.


### Install on Ubuntu

1. Before installing the docker, we need to update the server to be up to date.

2. Install the below package to ensure the apt work with the HTTP method. CA certificates are installed.

3. Add the GPG key for the Docker repository on the current server.

4. Now add the official Docker repository by running the below command in the terminal

5. Currently we need to install the Docker using the below command.

6. After successfully installing Docker, start the Docker service and enable the Docker service in case it is not automatically started.

7. After the Docker daemon starts, and run the command below to check the Docker status.

8. Then, verify the installed Docker version.

9. Next, we need to install docker-compose to build the container.

10. Next, we need to add the docker-compose command to the server. So that we can build, up or down the container.

11. Check the Docker Swarm status

12. If the Docker Swarm status is “Inactive”, check the status by run the below command.
