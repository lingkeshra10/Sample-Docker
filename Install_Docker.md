## Docker Installation Guide

### Install on RHEL/Debian

1. Before installing the Docker service, we make sure the server is up to date.

```
$ sudo yum check-update
$ sudo yum -y update
```

2. After the update was completed, we proceeded to install yum-utils in the servers.

```
$ sudo yum install -y yum-utils
```

3. After we add the yum-utils in the servers, we need to add the docker repo for installing docker service-related items.

```
$ sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

4. Then after we successfully install yum-utils and add the docker repo in the servers, we will proceed to install docker inside the servers.

```
$ cd /opt
$ sudo yum install docker-ce docker-ce-cli containerd.io
```

5. Next we need to start and enable the docker service.

```
$ sudo systemctl start docker
$ sudo systemctl enable docker
Or
$ sudo systemctl enable docker.service
$ sudo systemctl enable containerd.service
``` 
   
6. After the Docker daemon starts, we need to run the command below to check the Docker status.

```
$ sudo systemctl status docker
```

7. Next we need to add the firewall rules for the docker service to run.

```
$ firewall-cmd --zone=trusted --remove-interface=docker0 --permanent
$ firewall-cmd --permanent --zone=trusted --add-port=4243/tcp
$ firewall-cmd --reload
```

8. Then, we need to add the docker-compose command to the server for the services to run in the stack.

```
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

9. Change the permission to execute mode in the docker-compose file.

```
$ sudo chmod +x /usr/local/bin/docker-compose
```

10. Verify whether the docker-compose installation is completed or not by checking the version of the docker-compose command.

```
$ docker-compose version
```

11.  Finally, we need to activate the docker swarm mode in the docker services. Before we enable the docker swarm mode we need to check the docker swarm status. **(THESE STEPS ARE OPTIONAL IF YOU ARE NOT GOING TO USE DOCKER SWARM)**.

```
$ sudo docker system info | grep Swarm
```

12. After checking the docker swarm status if it is inactive, we need to start the docker swarm.

```
$ sudo docker swarm init
```

13. After starting the docker swarm mode successfully, we need to recheck the docker swarm status.

```
$ sudo docker system info | grep Swarm
```


### Install on Ubuntu

1. Before installing the docker, we need to update the server to be up to date.

```
$ sudo apt-get update
```

2. Install the below package to ensure the apt work with the HTTP method. CA certificates are installed.

```
$ sudo apt install -y apt-transport-https software-properties-common cacertificates curl wget
```

3. Add the GPG key for the Docker repository on the current server.

```
$ sudo wget https://download.docker.com/linux/ubuntu/gpg
$ sudo apt-key add gpg
```

4. Now add the official Docker repository by running the below command in the terminal

   **Make sure to check the Ubuntu version before running this command.**

```
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ echo "deb [arch=amd64] https://download.docker.com/linux/ubuntu (lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list
```

   If you are not sure what Ubuntu version you are using, run the below command.

```
$ lsb_release -a
```

5. Then, we will start to install the Docker using the command below.

```
$ sudo apt install -y docker-ce
```

6. After successfully installing Docker, start the Docker service and enable the Docker service in case it is not automatically started.

```
$ sudo systemctl start docker
$ sudo systemctl enable docker
```

7. After the Docker daemon starts, and run the command below to check the Docker status.

```
$ sudo systemctl status docker
```

8. Then, verify the installed Docker version.

```
$ docker --version
```

9. Next, we need to install docker-compose to build the container.

```
$ sudo apt install docker-compose
```

10. Next, we need to add the docker-compose command to the server. So that we can build, up or down the container.

```
$ sudo curl -L
"https://github.com/docker/compose/releases/download/1.27.4/dockercompose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

11. Change the permission to execute mode in the docker-compose file.

```
$ sudo chmod +x /usr/local/bin/docker-compose
```

12. Finally, we need to activate the docker swarm mode in the docker services. Before we enable the docker swarm mode we need to check the docker swarm status. **(THESE STEPS ARE OPTIONAL IF YOU ARE NOT GOING TO USE DOCKER SWARM)**.

```
$ sudo docker system info | grep Swarm
```

13. After checking the docker swarm status if it is inactive, we need to start the docker swarm.

```
$ sudo docker swarm init
```
