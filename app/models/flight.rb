class Flight < ActiveRecord::Base
  has_many :data_points
end
