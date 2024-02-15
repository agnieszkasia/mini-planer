import styled from "styled-components";
import CheckboxSwitch from "../../ui/CheckboxSwitch";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import IncreaseDecreaseInput from "../../ui/IncreaseDecreaseInput";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useUser } from "../authentication/useUser";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";
import { device } from "../../styles/devices";

const SectionHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1rem;
  margin-top: 2.4rem;
  white-space: nowrap;

  @media ${device.tablet} {
    gap: 2rem;
  }
`;

const Header = styled.div`
  text-transform: uppercase;
  font-size: 1rem;

  @media ${device.tablet} {
    gap: 1.6rem;
  }
`;

const calendarScaleOptions = ["15min", "30min", "1h", "2h"];
function UpdateSettings() {
  const { user } = useUser();
  const {
    isLoading,
    settings: {
      calendar_scale: calendarScale,
      start_time_of_day: startTimeOfDay,
      end_time_of_day: endTimeOfDay,
      calendar_font: calendarFont,
      num_priority_tasks: numPriorityTasks,
      postpone_tasks: postponeTasks,
      rate_day: rateDay,
      theme_color: themeColor,
    } = {},
  } = useSettings({ userId: user.id });
  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ newData: { [field]: value } });
  }

  return (
    <Form>
      <SectionHeader>
        <Header>Kalendarz</Header>
        <div
          style={{
            marginBottom: "0.4rem",
            width: "100%",
            borderBottom: "1px solid var(--color-grey-400",
          }}
        ></div>
      </SectionHeader>
      <FormRow label="Przedział czasowy kalendarza">
        <IncreaseDecreaseInput
          id="calendar_scale"
          defaultValue={calendarScale}
          update={updateSetting}
          options={calendarScaleOptions}
        />
      </FormRow>
      <FormRow label="Godzina początku dnia">
        <IncreaseDecreaseInput
          id="start_time_of_day"
          defaultValue={startTimeOfDay}
          update={updateSetting}
        />
      </FormRow>
      <FormRow label="Godzina końca dnia">
        <IncreaseDecreaseInput
          id="end_time_of_day"
          defaultValue={endTimeOfDay}
          update={updateSetting}
        />
      </FormRow>
      <FormRow label="Czcionka kalendarza" fullLabel>
        <Input
          type="select"
          id="min-nights"
          disabled={isUpdating}
          defaultValue={calendarFont}
          onBlur={(e) => handleUpdate(e, "calendar_font")}
        />
      </FormRow>
      <SectionHeader>
        <Header>Widok dnia</Header>
        <div
          style={{
            marginBottom: "0.4rem",
            width: "100%",
            borderBottom: "1px solid var(--color-grey-400",
          }}
        ></div>
      </SectionHeader>
      <FormRow label="Maks liczba zadań priorytetowych" smallLabel>
        <IncreaseDecreaseInput
          id="num_priority_tasks"
          defaultValue={numPriorityTasks}
          update={updateSetting}
        />
      </FormRow>
      <FormRow label="Ocena dnia">
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <CheckboxSwitch
            defaultValue={rateDay}
            id="rate_day"
            update={updateSetting}
          />
        </div>
      </FormRow>
    </Form>
  );
}

export default UpdateSettings;
