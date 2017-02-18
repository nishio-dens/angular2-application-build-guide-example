# What's this?

This is a sample application for devise_token_auth and angular2-token.

## Setup

```
bundle install
bundle exec rake db:create db:migrate db:seed
bundle exec rails server
```

and access to http://localhost:3000

## Login User

You can log in using the following information.

Email: admin@densan-labs.net
password: password


## Routing

```
                      Prefix Verb   URI Pattern                        Controller#Action

                        root GET    /                                  health_check#index
        new_api_user_session GET    /api/auth/sign_in(.:format)        devise_token_auth/sessions#new {:format=>:json}
            api_user_session POST   /api/auth/sign_in(.:format)        devise_token_auth/sessions#create {:format=>:json}
    destroy_api_user_session DELETE /api/auth/sign_out(.:format)       devise_token_auth/sessions#destroy {:format=>:json}
cancel_api_user_registration GET    /api/auth/cancel(.:format)         devise_token_auth/registrations#cancel {:format=>:json}
   new_api_user_registration GET    /api/auth/sign_up(.:format)        devise_token_auth/registrations#new {:format=>:json}
  edit_api_user_registration GET    /api/auth/edit(.:format)           devise_token_auth/registrations#edit {:format=>:json}
       api_user_registration PATCH  /api/auth(.:format)                devise_token_auth/registrations#update {:format=>:json}
                             PUT    /api/auth(.:format)                devise_token_auth/registrations#update {:format=>:json}
                             DELETE /api/auth(.:format)                devise_token_auth/registrations#destroy {:format=>:json}
                             POST   /api/auth(.:format)                devise_token_auth/registrations#create {:format=>:json}
     api_auth_validate_token GET    /api/auth/validate_token(.:format) devise_token_auth/token_validations#validate_token
                   api_tasks GET    /api/tasks(.:format)               api/tasks#index {:format=>:json}
          health_check_index GET    /health_check(.:format)            health_check#index
```
