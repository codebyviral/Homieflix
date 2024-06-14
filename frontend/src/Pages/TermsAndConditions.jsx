import React from "react";
import "../Styles/Terms.css";
import { Navbar } from "../Components/CompIndex";
const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="outerContainerTerms position-absolute top-50 start-50 translate-middle">
        <div className="mt-5 termsAndConditions">
          <h1>Terms and Conditions for Homieflix</h1>
          <p>
            Welcome to Homieflix! These terms and conditions outline the rules
            and regulations for the use of {"Homieflix's"} services. By
            accessing and using our services, you agree to be bound by these
            terms. If you do not agree with any part of the terms, you may not
            use our services.
          </p>

          <h2>1. Introduction</h2>
          <p>
            Homieflix provides streaming services as an alternative to Netflix.
            We offer various streaming plans at lower rates, securing all
            necessary rights from Netflix to provide these services.
          </p>

          <h2>2. Streaming Plans</h2>
          <p>Homieflix offers three streaming plans:</p>

          <h3>Basic Streaming Plan</h3>
          <ul>
            <li>
              <strong>Price:</strong> ₹29
            </li>
            <li>
              <strong>Duration:</strong> 1 Day
            </li>
            <li>
              <strong>Login:</strong> Single device login
            </li>
            <li>
              <strong>Video Quality:</strong> 4K / UHD
            </li>
            <li>
              <strong>Users:</strong> 1 user
            </li>
            <li>
              <strong>Quality:</strong> Best video quality
            </li>
          </ul>

          <h3>Standard Streaming Plan</h3>
          <ul>
            <li>
              <strong>Price:</strong> ₹189
            </li>
            <li>
              <strong>Duration:</strong> 19 Days
            </li>
            <li>
              <strong>Login:</strong> Single device login
            </li>
            <li>
              <strong>Video Quality:</strong> 4K / UHD
            </li>
            <li>
              <strong>Users:</strong> 1 user
            </li>
            <li>
              <strong>Quality:</strong> Best video quality
            </li>
          </ul>

          <h3>Premium Streaming Plan</h3>
          <ul>
            <li>
              <strong>Price:</strong> ₹249
            </li>
            <li>
              <strong>Duration:</strong> 1 Month
            </li>
            <li>
              <strong>Login:</strong> Single device login
            </li>
            <li>
              <strong>Video Quality:</strong> 4K / UHD
            </li>
            <li>
              <strong>Users:</strong> 1 user
            </li>
            <li>
              <strong>Quality:</strong> Best video quality
            </li>
          </ul>

          <h2>3. Account Registration</h2>
          <p>
            To use our services, you must create an account with Homieflix. You
            are responsible for maintaining the confidentiality of your account
            login information and for all activities that occur under your
            account.
          </p>

          <h2>4. Payment and Billing</h2>
          <p>
            Payments for our streaming plans must be made in accordance with the
            selected {"plan's"} pricing and duration. All payments are
            non-refundable, and Homieflix reserves the right to change the
            pricing of the plans at any time. Any changes in pricing will not
            affect existing subscriptions until they are renewed.
          </p>

          <h2>5. Usage and Restrictions</h2>
          <ul>
            <li>
              <strong>Single Device Login:</strong> Each plan allows streaming
              on a single device at any given time.
            </li>
            <li>
              <strong>Video Quality:</strong> All plans provide the highest
              video quality available (4K / UHD).
            </li>
            <li>
              <strong>User Limit:</strong> Only one user is permitted per plan.
            </li>
            <li>
              <strong>Content Access:</strong> You may not share your account
              credentials with others or use the service for commercial
              purposes.
            </li>
          </ul>

          <h2>6. Intellectual Property Rights</h2>
          <p>
            All content available through Homieflix is the property of Netflix
            and is protected by intellectual property laws. You agree not to
            reproduce, distribute, modify, create derivative works of, publicly
            display, or otherwise exploit any content without prior written
            consent from Netflix.
          </p>

          <h2>7. Termination</h2>
          <p>
            Homieflix reserves the right to terminate or suspend your account
            and access to our services at any time, without notice, for conduct
            that Homieflix believes violates these terms or is harmful to other
            users of the service, Homieflix, or third parties, or for any other
            reason.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            Homieflix will not be liable for any damages of any kind arising
            from the use of our services, including but not limited to direct,
            indirect, incidental, punitive, and consequential damages.
          </p>

          <h2>9. Changes to Terms and Conditions</h2>
          <p>
            Homieflix reserves the right to revise these terms and conditions at
            any time. Any changes will be effective immediately upon posting on
            our website. Your continued use of our services following any
            changes signifies your acceptance of the new terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of [Your Country/State], and you
            irrevocably submit to the exclusive jurisdiction of the courts in
            that location.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            If you have any questions about these terms and conditions, please
            contact us at [Your Contact Information].
          </p>

          <p>
            By using Homieflix services, you acknowledge that you have read,
            understood, and agree to be bound by these terms and conditions.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
