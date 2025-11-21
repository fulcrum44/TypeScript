import { create } from 'zustand'
import { Alumno } from "../entities/Alumno";
import { Proyecto } from "../entities/Proyecto";

interface State {
    alumnos: Alumno[],
    proyectos: Proyecto[]
    addAlumn: (alumno: Alumno) => void
    deleteAlumn: (alumno: String) => void
    addProject: (proyecto: Proyecto) => void
    deleteProject: (proyecto: String) => void
}

export const useAlumnProject= create<State>()((set) => ({
  alumnos: [],
  proyectos: [],
  addAlumn: (alumno) => set((state) => ({alumnos: [...state.alumnos, alumno]})),
  deleteAlumn: (alumno) => set((state) => ({alumnos: state.alumnos.filter((item) => item.id != alumno)})),
  addProject: (proyecto) => set((state) => ({proyectos: [...state.proyectos, proyecto]})),
  deleteProject: (proyecto) => set((state) => ({proyectos: state.proyectos.filter((item) => item.id != proyecto)})),
}))
