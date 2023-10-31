import { SurveyForm } from "./survey-form";

export function Survey() {
  return (
    <section>
      <div className="cf-container">
        <div className="mt-4 p-10 rounded-xl cf-card shadow-none">
          <SurveyForm />
        </div>
      </div>
    </section>
  );
}
