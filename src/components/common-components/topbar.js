import React, { Component } from 'react';
import { AiOutlineLeft, AiTwotoneHome } from 'react-icons/ai';

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <AiOutlineLeft /> <span>Vaccination List</span> <AiTwotoneHome />
      </div>
    </>
  );
}
