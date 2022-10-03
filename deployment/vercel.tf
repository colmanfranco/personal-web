data "vercel_project" "personal_web" {
  name = "colmanfranco-personal-web"
}

#resource "vercel_project" "personal_web" {
#  name      = "colmanfranco-personal-web"
#  framework = "nextjs"
#
#  git_repository = {
#    type = "github"
#    repo = "colmanfranco/personal-web"
#  }
#}

data "vercel_project_directory" "personal_web_directory" {
  path = "../../personal-web"
}

resource "vercel_deployment" "personal_web_deployment" {
  project_id  = data.vercel_project.personal_web.id
  files       = data.vercel_project_directory.personal_web_directory.files
  path_prefix = data.vercel_project_directory.personal_web_directory.path
  production  = true
}

resource "vercel_project_domain" "personal-web-domain" {
  project_id = data.vercel_project.personal_web.id
  domain     = "personal-web.colmanfranco.vercel.app"
}