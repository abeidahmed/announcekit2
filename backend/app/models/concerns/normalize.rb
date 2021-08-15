module Normalize
  extend ActiveSupport::Concern

  class_methods do
    def normalize(*args, &block)
      options = args.extract_options!
      normalizers = [block, options[:with]].flatten.compact

      before_validation do
        args.each { |field| send("#{field}=", apply_normalizers(field, normalizers)) }
      end
    end
  end

  private

  def apply_normalizers(field, normalizers)
    value = send(field).to_s

    normalizers.each do |normalizer|
      if normalizer.respond_to?(:call)
        value = normalizer.call(value)
      elsif value.respond_to?(normalizer)
        value = value.send(normalizer)
      end
    end

    value
  end
end
