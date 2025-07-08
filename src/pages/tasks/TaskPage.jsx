import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./taskPage.scss";

const DEFAULT_TASK_CONFIG = {
  title: "",
  description: "",
  credits: "",
  url: "",
  alternativeUrl: "",
  height: "800px",
  padding: 0,
  subtitle: "",
  rules: "",
  outerLinks: [],
  showIFrame: true,
  bonus: "",
};

const TaskPage = () => {
  const { id } = useParams();
  const [taskConfig, setTaskConfig] = useState({ ...DEFAULT_TASK_CONFIG });
  useEffect(() => {
    fetch(`https://tah25-api.onrender.com/tasks/${id}`)
        .then(response => response.json())
        .then(data => setTaskConfig({ ...DEFAULT_TASK_CONFIG,...data}));
  }, [id]);

  const {
    title,
    subtitle,
    description,
    rules,
    credits,
    url,
    alternativeUrl,
    height,
    padding,
    outerLinks,
    showIFrame,
    bonus,
  } = taskConfig;

  return (
    <div className="task">
      <header className="task__header">
        <h2 className="task__title">{title}</h2>
        <p className="task__subtitle">{subtitle}</p>
        {description && (
          <p>
            <strong>Description:</strong> {description}
          </p>
        )}

        {rules && (
          <p>
            <strong>Rules:</strong> {rules}
          </p>
        )}
        {bonus && (
          <p>
            <strong>Bonus:</strong> {bonus}
          </p>
        )}
        <div className="task__link-section">
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              Open task in a separate window
            </a>
          )}
          {alternativeUrl && (
            <>
              <span> | </span>
              <a href={alternativeUrl} target="_blank" rel="noreferrer">
                Alternative link
              </a>
            </>
          )}
          {outerLinks && outerLinks.length > 0 && (
            <ul>
              {outerLinks.map(({ url, title }) => (
                <li>
                  <a href={url} target="_blank" rel="noreferrer">
                    {title || url}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
      {url && showIFrame && (
        <iframe
          title={title}
          src={url}
          className="task__content-frame"
          height={height}
          style={{ padding: padding }}
        />
      )}
      <footer className="task__footer">
        {credits ? <p>Credits: {credits}</p> : null}
      </footer>
    </div>
  );
};

export default TaskPage;
