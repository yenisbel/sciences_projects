class Api::V1::ProjectsController < ApplicationController
  def index
    project = Project.all.order(created_at: :desc)
    render json: project
  end

  def create
    project = Project.create!(project_params)
    if project
      render json: project
    else
      render json: project.errors
    end
  end

  def show
    if project
      render json: project
    else
      render json: project.errors
    end
  end

  def destroy
    project&.destroy
    render json: {message: 'Project has been deleted'}
  end

  private
  def project_params
    params.permit(:name, :materials, :instruction, :image)
  end

  def project
    @project ||= Project.find(params[:id])
  end

end
