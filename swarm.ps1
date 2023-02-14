$registry = 'swarm-registry'
$manager = 'swarm-manager'
$workers = 'swarm-worker-1','swarm-worker-2'
$hyperv_virtual_switch = 'ExternalSwitch'

docker-machine create --driver hyperv --hyperv-virtual-switch ${hyperv_virtual_switch} ${registry}
docker-machine ssh swarm-registry docker run -d -p 5000:5000 --restart=always --name swarm-registry registry:2

$registry_ip = $(docker-machine ip ${registry}) #192.168.42.154
$swarm_nodes =  @($manager) + @($workers)

foreach ($node in $swarm_nodes) {
  docker-machine create --driver hyperv --hyperv-virtual-switch ${hyperv_virtual_switch} --engine-insecure-registry ${registry_ip}:5000 ${node}
}

docker-machine ssh ${manager} docker swarm init

$swarm_token = $(docker-machine ssh ${manager} docker swarm join-token -q worker)

$manager_ip = $(docker-machine ip ${manager})

foreach ($node in $workers) {
  docker-machine ssh ${node} docker swarm join --token ${swarm_token} ${manager_ip}:2377
}

docker-machine create --driver hyperv --hyperv-virtual-switch ExternalSwitch --engine-insecure-registry 192.168.42.154:5000 swarm-manager
docker-machine create --driver hyperv --hyperv-virtual-switch ExternalSwitch --engine-insecure-registry 192.168.42.154:5000 swarm-worker-1
docker-machine create --driver hyperv --hyperv-virtual-switch ExternalSwitch --engine-insecure-registry 192.168.42.154:5000 swarm-worker-2

docker-machine ssh swarm-manager docker swarm init
$swarm_token = $(docker-machine ssh ${manager} docker swarm join-token -q worker)


--token SWMTKN-1-5fkuqgszayks1wrffi3gob1ph6y21k2mo61h73eyn0qf5iobe8-0wpwxakdzuhqq9h9m78ox4k0x 192.168.42.180:2377

docker-machine ssh swarm-worker-1 docker swarm join --token SWMTKN-1-5fkuqgszayks1wrffi3gob1ph6y21k2mo61h73eyn0qf5iobe8-0wpwxakdzuhqq9h9m78ox4k0x 192.168.42.180:2377
docker-machine ssh swarm-worker-2 docker swarm join --token SWMTKN-1-5fkuqgszayks1wrffi3gob1ph6y21k2mo61h73eyn0qf5iobe8-0wpwxakdzuhqq9h9m78ox4k0x 192.168.42.180:2377