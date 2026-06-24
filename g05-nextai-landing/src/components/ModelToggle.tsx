import { models, type ModelId } from '../data/g05Plans';

interface ModelToggleProps {
  activeModel: ModelId;
  onChange: (modelId: ModelId) => void;
}

export default function ModelToggle({ activeModel, onChange }: ModelToggleProps) {
  const active = models.find((m) => m.id === activeModel) ?? models[0];

  return (
    <div className="model-toggle">
      <div className="model-toggle__tabs" role="tablist" aria-label="Select model">
        {models.map((model) => {
          const isActive = model.id === activeModel;
          return (
            <button
              key={model.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`model-toggle__tab${isActive ? ' is-active' : ''}`}
              onClick={() => onChange(model.id)}
            >
              {model.name}
            </button>
          );
        })}
      </div>
      <p className="model-toggle__tagline">{active.tagline}</p>
    </div>
  );
}
