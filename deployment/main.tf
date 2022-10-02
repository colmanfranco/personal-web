terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.4"
    }
  }
}

resource "vercel_project" "personal_web" {
  name      = "personal-web-project"
  framework = "nextjs"
  
  git_repository = {
    type = "github"
    repo = "colmanfranco/personal-web"
  }
}

data "vercel_project_directory" "personal_web_directory" {
  path = "../../personal-web"
}

resource "vercel_deployment" "personal_web_deployment" {
  project_id  = vercel_project.personal_web.id
  files       = data.vercel_project_directory.personal_web_directory.files
  path_prefix = "../../personal-web"
  production  = true
}

resource "vercel_project_domain" "example" {
  project_id = vercel_project.personal_web.id
  domain     = "personal-web.vercel.app"
}

