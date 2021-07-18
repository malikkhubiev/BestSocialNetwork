import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import PersonStatus from "./PersonStatus";

let container:Element|null = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  if(container !== null){
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

let myMatch = {
  isExact: true,
  params: { userId: "" },
  path: "",
  url: ""
}
let myProfile = {
  id: 0,
  name: "",
  aboutMe: "",
  status: "",
  lookingForAJob: true,
  isMainUser: true,
  posts: [],
  shouldDialogBoxBeOpened: true,
  followed: true
}
describe("My test is working", ()=>{
  it("checking the status", () => {
    render(<PersonStatus getUser={()=>{}} changeStatus={()=>{}} profile={myProfile} match={myMatch} status="Margaret" />, container);
    if(container !== null && container.querySelector("p") !== null){
      // @ts-ignore
      expect(container.querySelector("p").textContent).toBe("Margaret");
    }
  });
})
