role :db,           "staging.nahj-chi.com"
role :web,          "staging.nahj-chi.com"

set :stage,         "staging"

# Open site after deploying
after "deploy" do
    system "open http://#{branch}.#{stage}.#{domain}/"
end
