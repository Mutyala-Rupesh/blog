class StaticController < ApplicationController
    def home
        render: {status: "Its working"}
    end
end