import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// 12. What are the signs that my dryer vent needs cleaning? Signs include longer
// drying times, clothes that are hot to the touch after a cycle, a burning smell
// while the dryer is running, and the outside vent flap not opening properly.

export default function AccordionElement() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            sx={{
              fontSize: 23,
            }}
          >
            1. Does Liberty Shine Services accept credit cards?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            Not at this moment. We accept checks, cash. We also accept PayPal, Venmo,
            Zelle and ApplePay.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            sx={{
              fontSize: 23,
            }}
          >
            2. How do you charge for windows?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            For windows we charge by the size of the window // pane, how many panes you
            have, what floor they are on, they type of window. We // give a free estimate,
            and if agreed on price, we do the service the same day.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            sx={{
              fontSize: 23,
            }}
          >
            3. Is Liberty Shine Services insured?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            Yes, we are fully insured. Selecting an insured company not only safeguards
            your home while we are on-site but also ensures that our employees are covered
            in case of any injuries on your property.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            sx={{
              fontSize: 23,
            }}
          >
            4. Do I need to be home during my window cleaning / dryer vent service?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            That is entirely up to you. Many of our clients leave us with with a code or
            key to let ourselves in and out. If you’d rather be home we will start with
            the inside so that you can leave if need be when we switch to the outside.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            sx={{
              fontSize: 23,
            }}
          >
            5. Do I need to prepare my home before the window washers arrive?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            Generally, you should remove any items or obstacles near the windows to
            provide easy access. Our team can handle the rest.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            sx={{
              fontSize: 23,
            }}
          >
            6. Will window cleaning help improve energy efficiency?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            Clean windows allow more natural light to enter your home, which can reduce
            the need for artificial lighting and potentially lower energy costs.
            Additionally, removing dirt and debris can help maintain the integrity of the
            window seals, improving overall insulation.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            sx={{
              fontSize: 23,
            }}
          >
            7. Do You wash screens and tracks? Is it included?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            We vacuum and wash tracks. We usually wipe screens with wet towel. Also we do
            a free screen inspections, and provide prescreening service if needed and
            agreed.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            sx={{
              fontSize: 23,
            }}
          >
            8. Do you repair damaged screens?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            Yes, we do. First we do a free inspection, discuss it with you, and if agreed
            we take screens with us, and deliver and install it within 1-3 business days.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            sx={{
              fontSize: 23,
            }}
          >
            9. Is hard water stains, paint, fungus removal included?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            These item take special chemicals and techniques to safely remove from your
            windows. They also take extra labor and time. For that reason we do charge
            more for these services. We also require waivers for services that require us
            to use a blade.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            sx={{
              fontSize: 23,
            }}
          >
            10. How do You charge for gutter cleaning?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            We charge for gutters by the linear foot. Our rate varies depending on what
            story the gutters on and if they have gutter guards or leaf guards on them.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            sx={{
              fontSize: 23,
            }}
          >
            11. How Often Do I have to clean My dryer vent? How do You charge?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            Dryer vents should be cleaned at least once a year to prevent lint buildup,
            which can be a fire hazard and reduce the efficiency of your dryer.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            sx={{
              fontSize: 23,
            }}
          >
            12. What are the signs that my dryer vent needs cleaning?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            Signs include longer drying times, clothes that are hot to the touch after a
            cycle, a burning smell while the dryer is running, and the outside vent flap
            not opening properly.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
