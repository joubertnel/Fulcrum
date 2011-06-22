# ==========================================================================
# Project:   Fulcrum
# Copyright: @2011 Joubert Nel
# ==========================================================================

# This is your Buildfile, which sets build settings for your project.
# For example, this tells SproutCore's build tools that your requires
# the SproutCore framework.
config :all, :required => :sproutcore

# In addition to this Buildfile, which gives settings for your entire project,
# each of your apps has its own Buildfile with settings specific to that app.

# SproutCore dev server does not proxy this correctly, so use Apache reverse proxy instead (make sure
# to have ProxyPreserveHost turned off
# proxy '/services', :to => 'www.pivotaltracker.com', :secure => true
