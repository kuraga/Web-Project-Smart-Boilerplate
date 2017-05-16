require 'helper'

class Application < Grape::API

  format :json

  helpers Helper

  namespace 'api/state' do

    get do
      present get_state
    end

  end

  namespace 'api/substances' do

    params do
      requires :substance_id, type: Integer
    end
    route_param :substance_id do

      get do
        present get_state[params[:substance_id]]
      end

    end

  end

end
