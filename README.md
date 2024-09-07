# AWS Cloud Resume Challenge

**Description**:
This is a project challange aimed at knowing the fundamental skills as a cloud engineer or solutions architect. You must be able to use different services differently and integrate them with each other to create a functional project.

![mydiagram1](https://github.com/user-attachments/assets/8b4298d4-b10c-4945-bad2-af3113fe0637)


**Services used for the project**:

- S3

- Cloudfront

- AWS Certificate Manager (ACM)

- Route53

- lambda and Python 3.8 as runtime

- dynamoDB

- Terraform

- Github Actions

## [Live Demo 🔗](https://resume.uwalakaike.com)


**Problems encountered and troubleshooting**:

- I faced an issue with my cloudfront distribution. I fixed it by checking my origin access control (OAC) and inputing the destination as my S3 bucket where I was hosting my static files, also had to update my s3 bucket permissions settings and also unticked static website hosting on my s3 bucket so my website could only be accessed by cloudfront only.
- I faced issues with AWS Certificate Manager(ACM) not granting my TLS/SSL certificate for my domain name that I bought in Route53. I found out that I chose DNS validation, So I had to create a CNAME record in my hosted zone in Route53, the CNAME details was gotten from ACM and I updated it into my Route53 hosted zones
- I faced issues with my lambda function url trying to communicate with my dynamodb. There was issue with my python code and I had to find a way to fix it by accessing my code and also granting my lambda funtion the right role to access my dynamo DB to get the number of views on my website. Also I found out that my lambda function and my dynambo DB should be in the same region!
- After I had an issue with cloudfront updating the changes I made in the code, so I fixed it by cache invalidation because by default it takes cloudfront 24hrs to update the effect of any change to our S3
- I had a few issues with git but I figured out and learnt how to orchestrate more git commands
- I had issues in trying to integrate code changes locally to my S3 bucket using github actions, I found out that I had some indentation error in writting the commandn which is a .yaml file and specifically built by Jake Jarvis through Market place and I fixed that, I also had to remove some secured files locally to prevent security risks and I uploaded the remaining files using the .gitignore file to fix the issue.



