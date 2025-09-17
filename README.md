Implementing Horizontal Pod Autoscaler (HPA) with Load Testing Using k6

Deploy Metrics Server

kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

check :
kubectl get deployment metrics-server -n kube-system



for load check install k6   

sudo apt update
sudo apt install -y gnupg software-properties-common
curl -s https://dl.k6.io/key.gpg | sudo apt-key add -
echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt update
sudo apt install k6

 check :
 k6 version
