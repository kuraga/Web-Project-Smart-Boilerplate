require 'spec_helper'

require 'application'

RSpec.describe Application do
  include Rack::Test::Methods

  def app
    Application
  end

  describe 'Состояние' do

    describe 'GET /api/state' do
      before :context do
        get "/api/state"
        @status = last_response.status
        @body = last_response.body
        @result = JSON.parse! @body
      end

      it 'завершается удачно' do
        expect(@status).to eq(200)
      end

      describe 'результат' do

        it 'хэш с ключами-строками' do
          expect(@result).to be_a Hash
          expect(@result.keys).to all be_a String
        end

        describe 'элемент результата' do
          before do
            @substance_id = @result.keys.sample
            @substance = @result[@substance_id]
          end

          it 'id совпадает с ключом элемента' do
            expect(@substance['id']).to eq @substance_id
          end

          it 'имеет корректный тип type' do
            expect(@substance['type']).to be_in %w(system hall box node)
          end

          it 'имеет children_ids' do
            expect(@substance['children_ids']).to be_an Array
            expect(@substance['children_ids']).to all be_a String
          end

          it 'содержимое children_ids - идентификаторы сущностей' do
            expect(@substance['children_ids']).to all be_in @result.keys
          end

        end

      end

    end

  end

end
