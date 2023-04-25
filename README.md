Hi there! 👋

This is a redesign of Movement Ministry's site.

Written in Typescript <img src="https://cdn3.emoji.gg/emojis/8584-typescript.png" width="24px" height="24px" alt="TypeScript"> and React <img src="https://cdn3.emoji.gg/emojis/3203-reactjs.png" width="24px" height="24px" alt="reactjs">



Details on upgrading Ruby - https://mac.install.guide/ruby/13.html. Important to prioritize ruby you installed via homebrew
`if [ -d "/usr/local/opt/ruby/bin" ]; then
  export PATH=/usr/local/opt/ruby/bin:$PATH
  export PATH=`gem environment gemdir`/bin:$PATH
fi`

How to install rails and build your first app! - https://guides.rubyonrails.org/getting_started.html

Installing PG -> 
`brew install libpq`
`gem install pg -- --with-pg-config=/opt/homebrew/opt/libpq/bin/pg_config`

Follow this guide to create your db - https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-ruby-on-rails-application-on-macos

Start postgres@15 -`brew services start postgresql@15`

Start rails server - `rails server --binding=127.0.0.1` / `rails s`

Test rails is running - `127.0.0.1:3000`

Create scaffolds - `rails g scaffold [table name] property:type property:type`