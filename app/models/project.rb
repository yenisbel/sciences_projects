class Project < ApplicationRecord
    validates :name, presence: true
    validates :materials, presence: true
    validates :instruction, presence: true
end
