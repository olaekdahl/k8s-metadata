# Kubernetes Metadata Display

This Node.js application fetches Kubernetes metadata about the node and displays it in an HTML page.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine.
- Access to a Kubernetes cluster or a `kubeconfig` file for authentication.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/olaekdahl/k8s-metadata.git
   cd k8s-metadata
   ```

## Kubernetes Deployment

This application includes Kubernetes manifests for different deployment scenarios:

### Local Kind Deployment

For local development using Kind clusters:

```bash
# Deploy the application
kubectl apply -f deployment.yaml

# Create NodePort service for local access
kubectl apply -f service-kind.yaml

# Access the application
# The service will be available on any node IP at port 30080
kubectl get nodes -o wide
# Visit http://<node-ip>:30080
```

### AWS EKS Deployment

For production deployment on AWS EKS with Elastic Load Balancer:

```bash
# Deploy the application
kubectl apply -f deployment.yaml

# Create LoadBalancer service with ELB integration
kubectl apply -f service-eks.yaml

# Get the external load balancer URL
kubectl get service metadata-service-eks
# Wait for EXTERNAL-IP to be assigned, then visit http://<external-ip>
```

## Service Manifests

- **service-kind.yaml**: NodePort service for local Kind clusters (port 30080)
- **service-eks.yaml**: LoadBalancer service for AWS EKS with ELB annotations
