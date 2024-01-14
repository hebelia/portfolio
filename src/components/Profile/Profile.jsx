"use client";

import React from "react";

const Profile = () => {
  return (
    <div>
      <a class="nes-btn" href="#">
        Normal
      </a>

      <button type="button" class="nes-btn is-primary">
        Primary
      </button>
      <button type="button" class="nes-btn is-success">
        Success
      </button>
      <button type="button" class="nes-btn is-warning">
        Warning
      </button>
      <button type="button" class="nes-btn is-error">
        Error
      </button>
      <button type="button" class="nes-btn is-disabled">
        Disabled
      </button>

      <label class="nes-btn"> 
        <span>Select your file</span>
        <input type="file" />
      </label>
    </div>
  );
};

export default Profile;
