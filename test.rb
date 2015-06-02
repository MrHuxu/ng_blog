    class Game2048
      attr_reader :board, :win_flag, :lose_flag, :move_flag
      def initialize
        @board = Array.new(16, '-')
        pos1 = (rand * 100).to_i % 16
        pos2 = (rand * 100).to_i % 16
        while pos2 == pos1
          pos2 = (rand * 100).to_i % 16
        end
        num1 = ((rand * 100).to_i % 2 + 1) * 2
        num2 = ((rand * 100).to_i % 2 + 1) * 2
        @board[pos1] = num1
        @board[pos2] = num2
        @cal_arr = Array.new
      end
      
      def print_borad
        system('clear') 
        puts "\n\n     ======== 2048 by TDFJ =======\n\n"
        0.upto(3) do |i1|
          ((4 * i1)..(4 * i1 + 3)).each do |i2| 
            (4 - @board[i2].to_s.length).times { print ' ' }
            print @board[i2], '       ' 
          end
          print "\n\n\n\n"
        end
      end
      
      def create_piece
        empty_place = Array.new
        (0..15).each do |i|
          empty_place.push(i) if @board[i] == '-'
        end
        create_place = (rand * 100).to_i % empty_place.length
        @board[empty_place[create_place]] = ((rand * 100).to_i % 2 + 1) * 2
      end
      
      def win?
        @win_flag = false
        (0..15).each { |i| @win_flag = true if @board[i] == 2048 }
        @win_flag
      end
      
      def lose?
        @lose_flag = true
        (0..15).each { |i| @lose_flag = false if @board[i] == '-' }
        @lose_flag
      end
      
      def cal
        0.upto(@cal_arr.length - 2) do |i|
          if @cal_arr[i] != '-' && @cal_arr[i] == @cal_arr[i + 1]
            @move_flag = true
            @cal_arr[i] = @cal_arr[i] * 2
            @cal_arr.delete_at(i + 1)
            @cal_arr.push('-')
          end
        end
        (4 - @cal_arr.length).times { @cal_arr.push('-') }
      end
      
      def step(ori)
        @move_flag = false
        case ori
        when 'up' then
          (0..3).each do |i1|
            @cal_arr.clear
            0.step(12, 4) { |i2| @cal_arr.push(@board[i1 + i2]) if @board[i1 + i2] != '-' }
            @move_flag = true if @board[i1 + 0] == '-' && @cal_arr.length != 0
            self.cal
            0.step(12, 4) { |i2| @board[i1 + i2] = @cal_arr[i2 / 4] }
          end
        when 'down' then
          (0..3).each do |i1|
            @cal_arr.clear
            12.step(0, -4) { |i2| @cal_arr.push(@board[i1 + i2]) if @board[i1 + i2] != '-' }
            @move_flag = true if @board[i1 + 12] == '-' && @cal_arr.length != 0
            self.cal
            12.step(0, -4) { |i2| @board[i1 + i2] = @cal_arr[(12 - i2) / 4] }
          end
        when 'left' then
          0.step(12, 4) do |i1|
            @cal_arr.clear
            0.upto(3) { |i2| @cal_arr.push(@board[i1 + i2]) if @board[i1 + i2] != '-' }
            @move_flag = true if @board[i1] == '-' && @cal_arr.length != 0
            self.cal
            0.upto(3) { |i2| @board[i1 + i2] = @cal_arr[i2] }
          end
        when 'right' then
          0.step(12, 4) do |i1|
            @cal_arr.clear
            3.downto(0) { |i2| @cal_arr.push(@board[i1 + i2]) if @board[i1 + i2] != '-' }
            @move_flag = true if @board[i1 + 3] == '-' && @cal_arr.length != 0
            self.cal
            3.downto(0) { |i2| @board[i1 + i2] = @cal_arr[3 - i2] }
          end
        end
      end
    end

    game2048 = Game2048.new
    game2048.print_borad
    input = gets.chomp
    while input != 'q'
      case input
      when "\e[A" then
        game2048.step('up')
      when "\e[B" then
        game2048.step('down')
      when "\e[D" then
        game2048.step('left')
      when "\e[C" then
        game2048.step('right')
      end
      game2048.create_piece if game2048.move_flag
      game2048.print_borad
      input = gets.chomp
    end
