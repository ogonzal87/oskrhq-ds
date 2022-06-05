import React from "react";
import Button from "../../Button";
import Avatar from "../../Avatar";
import Checkbox from "../../Checkbox";
import InputText from "../../InputText";
import InputSearch from "../../InputSearch";
import InputSelect from "../../InputSelect";
import Radio from "../../Radio";
import Switch from "../../Switch";
import Textarea from "../../Textarea";
import FooterMessage from "../../app/FooterMessage/FooterMessage";
import styled from "styled-components";
import MichaelScottImg from "../../../assets/avatar-page/michael-scott.jpg";

const PlaygroundPageContent = styled.div`
  max-width: 714px;
  padding: 24px 0 200px 60px;

  img {
    float: left;
    margin: 32px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  max-width: 65ch;
  margin: 80px 0 120px 0;
  button {
    margin-left: 16px;
  }
`;

const Form = styled.div`
  margin-top: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .og-switch-container {
    margin: 0 16px 16px 16px;
  }
`;

const Radios = styled.div`
  padding: 32px;
`;

const Checkboxes = styled.div`
  padding: 16px;
  .og-checkbox-container {
    margin-bottom: 16px;
  }
`;

const TwoParagraphs = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 32px;
`;

const SearchInput = styled.div`
  margin-bottom: 96px;
`;

const UiElementsPage = () => (
  <div className="main-content">
    <div className="container">
      <PlaygroundPageContent>
        <h1>Lorem Ipsum Dolor Amet</h1>

        <Avatar src={MichaelScottImg} size="large" />

        <p>
          Lorem ipsum dolor amet pitchfork echo park art party,{" "}
          <a href="#">trust fund plaid direct trade chartreuse schlitz</a>.
          Paleo portland listicle +1 schlitz af tbh cardigan. Celiac +1 lyft la
          croix, tofu taxidermy thundercats schlitz. Jianbing kale chips
          poutine, microdosing church-key kogi sriracha tattooed fashion axe.
          Gluten-free retro seitan chartreuse taxidermy.
        </p>

        <p>
          Lorem ipsum dolor amet pitchfork echo park art party,{" "}
          <strong>trust fund plaid direct trade chartreuse schlitz</strong>.
          Paleo portland listicle +1 schlitz af tbh cardigan. Celiac +1 lyft la
          croix, tofu taxidermy thundercats schlitz. Jianbing kale chips
          poutine, microdosing church-key kogi sriracha tattooed fashion axe.
          Gluten-free retro seitan chartreuse taxidermy..
        </p>

        <p>
          <i>
            Lorem ipsum dolor amet pitchfork echo park art party, trust fund
            plaid direct trade chartreuse schlitz. Paleo portland listicle +1
            schlitz af tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy
            thundercats schlitz. Jianbing kale chips poutine, microdosing
            church-key kogi sriracha tattooed fashion axe. Gluten-free retro
            seitan chartreuse taxidermy.
          </i>
        </p>

        <Buttons>
          <Button type="secondary" size="medium">
            Cancel
          </Button>
          <Button type="primary" size="medium">
            Save
          </Button>
        </Buttons>

        <h2>Lorem Ipsum Dolor Amet</h2>

        <p>
          Lorem ipsum dolor amet pitchfork echo park art party, trust fund plaid
          direct trade chartreuse schlitz. Paleo portland listicle +1 schlitz af
          tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy thundercats
          schlitz. Jianbing kale chips poutine, microdosing church-key kogi
          sriracha tattooed fashion axe. Gluten-free retro seitan chartreuse
          taxidermy.
        </p>

        <Form>
          <InputText label="First Name" />
          <InputText label="Last Name" />
          <InputSelect label="Marital Status" placeholder="Select">
            <option value="" selected>
              Choose...
            </option>
            <option value="">Single</option>
            <option value="">Married</option>
            <option value="">It's Complicated</option>
          </InputSelect>
          <Radios>
            <Radio checked name="radio" label="Checked" />
            <Radio name="radio" label="Unchecked" />
          </Radios>
          <div>
            <Switch />
          </div>
        </Form>

        <Textarea label="Comment (Optional)" />
        <Checkboxes>
          <Checkbox
            name="checkboxA"
            labelText="This is a Checkbox"
            value="checkboxA"
          />
          <Checkbox
            name="checkboxB"
            labelText="Another Checkbox"
            value="checkboxB"
          />
          <Checkbox
            name="checkboxB"
            labelText="Ane yet another one"
            value="checkboxB"
          />
          <Checkbox
            name="checkboxB"
            labelText="But wait... there is more"
            value="checkboxB"
          />
        </Checkboxes>

        <SearchInput>
          <InputSearch placeholder="Search..." />
        </SearchInput>

        <h3>Lorem Ipsum Dolor Amet</h3>

        <p>
          Lorem ipsum dolor amet pitchfork echo park art party, trust fund plaid
          direct trade chartreuse schlitz. Paleo portland listicle +1 schlitz af
          tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy thundercats
          schlitz. Jianbing kale chips poutine, microdosing church-key kogi
          sriracha tattooed fashion axe. Gluten-free retro seitan chartreuse
          taxidermy.
        </p>

        <TwoParagraphs>
          <p>
            Lorem ipsum dolor amet pitchfork echo park art party, trust fund
            plaid direct trade chartreuse schlitz. Paleo portland listicle +1
            schlitz af tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy
            thundercats schlitz. Jianbing kale chips poutine, microdosing
            church-key kogi sriracha tattooed fashion axe. Gluten-free retro
            seitan chartreuse taxidermy.
          </p>

          <p>
            Lorem ipsum dolor amet pitchfork echo park art party, trust fund
            plaid direct trade chartreuse schlitz. Paleo portland listicle +1
            schlitz af tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy
            thundercats schlitz. Jianbing kale chips poutine, microdosing
            church-key kogi sriracha tattooed fashion axe. Gluten-free retro
            seitan chartreuse taxidermy.
          </p>
        </TwoParagraphs>

        <h4>Lorem Ipsum Dolor Amet</h4>

        <p>
          Lorem ipsum dolor amet pitchfork echo park art party, trust fund plaid
          direct trade chartreuse schlitz. Paleo portland listicle +1 schlitz af
          tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy thundercats
          schlitz. Jianbing kale chips poutine, microdosing church-key kogi
          sriracha tattooed fashion axe. Gluten-free retro seitan chartreuse
          taxidermy.
        </p>

        <TwoParagraphs>
          <div>
            <h5 className="og-text-style-overline">Lorem Ipsum Dolor Amet</h5>

            <p className="og-text-style-caption">
              Lorem ipsum dolor amet pitchfork echo park art party, trust fund
              plaid direct trade chartreuse schlitz. Paleo portland listicle +1
              schlitz af tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy
              thundercats schlitz. Jianbing kale chips poutine, microdosing
              church-key kogi sriracha tattooed fashion axe. Gluten-free retro
              seitan chartreuse taxidermy.
            </p>
          </div>
          <div>
            <h5 className="og-text-style-overline">Lorem Ipsum Dolor Amet</h5>

            <p className="og-text-style-caption">
              Lorem ipsum dolor amet pitchfork echo park art party, trust fund
              plaid direct trade chartreuse schlitz. Paleo portland listicle +1
              schlitz af tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy
              thundercats schlitz. Jianbing kale chips poutine, microdosing
              church-key kogi sriracha tattooed fashion axe. Gluten-free retro
              seitan chartreuse taxidermy.
            </p>
          </div>
        </TwoParagraphs>
      </PlaygroundPageContent>
    </div>
    <FooterMessage />
  </div>
);

export default UiElementsPage;
