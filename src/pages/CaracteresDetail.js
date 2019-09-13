import React, { useEffect, useState } from "react";
import "./CaracteresDetail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

export default function CaracteresDetail({ match, history }) {
  return (
    <div className="caracteres-detail-container">
        <button className="action">
            <FontAwesomeIcon icon={faSync} onClick={()=> history.push(`/caracteres/${match.params.id}/update`)} />
        </button>
      <div className="border-image">
        <img src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" alt="" />
      </div>
      <div className="name">DR. STONE sdfgsd sfdg sdfgsdfgs dfgs fdsg fg</div>
      
      <div className="description">
      Lorem ipsum dolor sit amet, mi curabitur ligula, eleifend nostra orci massa, elit wisi per justo duis venenatis at, maecenas diam sit elit feugiat, donec tortor ipsum gravida mauris. Enim felis a arcu, ipsum autem vestibulum massa, hac pharetra ornare tellus nisl, phasellus duis. Pellentesque egestas, bibendum nec, augue ac hac arcu ipsum viverra nibh, faucibus tempor curabitur vel sem. Ante condimentum tempus est diam lobortis blandit, velit nunc sed wisi risus, ipsum luctus tincidunt morbi ut porttitor facilisis, nec vestibulum erat leo sodales. Accumsan curabitur vestibulum et nec rutrum commodo, adipiscing nec nulla eu nunc magnis, non dis scelerisque justo in urna. Accumsan velit vestibulum vitae ultricies, molestiae dignissim, porta ut lacinia, pellentesque arcu proin adipiscing. Mollis facilisi, vestibulum lorem orci adipiscing eget, maecenas lobortis pellentesque arcu porta, urna nunc aenean penatibus tortor ante tempor, vestibulum lectus pellentesque vivamus arcu. Mollis molestie, enim fames eu nec diam cursus, vestibulum cum, quia vivamus metus. Ac sit adipiscing adipiscing augue nulla, sed fusce, nunc natoque in.
      Lorem ipsum dolor sit amet, mi curabitur ligula, eleifend nostra orci massa, elit wisi per justo duis venenatis at, maecenas diam sit elit feugiat, donec tortor ipsum gravida mauris. Enim felis a arcu, ipsum autem vestibulum massa, hac pharetra ornare tellus nisl, phasellus duis. Pellentesque egestas, bibendum nec, augue ac hac arcu ipsum viverra nibh, faucibus tempor curabitur vel sem. Ante condimentum tempus est diam lobortis blandit, velit nunc sed wisi risus, ipsum luctus tincidunt morbi ut porttitor facilisis, nec vestibulum erat leo sodales. Accumsan curabitur vestibulum et nec rutrum commodo, adipiscing nec nulla eu nunc magnis, non dis scelerisque justo in urna. Accumsan velit vestibulum vitae ultricies, molestiae dignissim, porta ut lacinia, pellentesque arcu proin adipiscing. Mollis facilisi, vestibulum lorem orci adipiscing eget, maecenas lobortis pellentesque arcu porta, urna nunc aenean penatibus tortor ante tempor, vestibulum lectus pellentesque vivamus arcu. Mollis molestie, enim fames eu nec diam cursus, vestibulum cum, quia vivamus metus. Ac sit adipiscing adipiscing augue nulla, sed fusce, nunc natoque in.
      </div>
    </div>
  );
}
