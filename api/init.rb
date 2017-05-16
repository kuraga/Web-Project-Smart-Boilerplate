require 'logger'

$logger = Logger.new $stdout
$logger.level = Logger::DEBUG

require 'rubygems'

require 'bundler'
Bundler.require :default, ENV['STAGE'].to_sym
require 'active_support/all'

$LOAD_PATH.unshift File.dirname(__FILE__)
