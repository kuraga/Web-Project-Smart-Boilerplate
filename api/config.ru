require File.join(File.dirname(__FILE__), 'init')

use Rack::CommonLogger, $logger

public_path = File.join File.dirname(__FILE__), '_public'
public_root_files = Dir.entries(public_path) - %w(. ..)
public_root_urls = public_root_files.collect { |filepath| "/#{File.basename(filepath)}" }
use Rack::Static, urls: public_root_urls, root: public_path, index: 'index.html'

require 'application'
run Application
