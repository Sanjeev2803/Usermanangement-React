import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function Technology() {
  return (
    <div>
<div class="container">
  <div class="row">
    <div class="col-sm">
        <ul>
    <li className="nav-item" style={{listStyle:"none"}}><Link className="nav-link" aria-current="page" to="Node">Node</Link></li></ul>
    </div>
    <div class="col-sm">
    <ul>
    <li className="nav-item" style={{listStyle:"none"}}><Link className="nav-link" aria-current="page" to="Angular">Angular</Link></li></ul>
      
    </div>
    <div class="col-sm">
    <ul>
    <li className="nav-item" style={{listStyle:"none"}}><Link className="nav-link" aria-current="page" to="Vue">Vue</Link></li></ul>
    </div>
  </div>
</div>
<Outlet></Outlet>
    </div>
  )
}

export default Technology