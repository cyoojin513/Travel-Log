class UserSerializer < ActiveModel::Serializer
  attributes :name, :id
  
  has_many :slideshows
end
