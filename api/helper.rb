module Helper

  def get_state
    substances_num = 1000  # 1 + 2 + 2*20 + 40*20 # система, в ней 2 зала, в каждом зале по 20 стоек с 20-ю серверами в каждой

    state = (1..substances_num).inject({}) do |state, substance_id|
      state[substance_id] = {
        id: substance_id.to_s,

        type: case substance_id
          when 1     then 'system'
          when 2..3  then 'hall'
          when 4..43 then 'box'
          else            'node'
          end,

        status: rand(100),

        children_ids: case substance_id
          when 1     then (2..3).collect(&:to_s)
          when 2..3  then ((4+(substance_id-2)*20)..(4+(substance_id-2)*20+20-1)).collect(&:to_s)
          when 4..43 then ((44+(substance_id-4)*20)..(44+(substance_id-4)*20+20-1)).collect(&:to_s)
          else            []
          end
      }

      state
    end
  end

end
