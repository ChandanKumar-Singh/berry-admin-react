import React, { useState } from 'react';
import { TextField, Switch, Typography, Divider, Box, Grid, FormControlLabel, Select, MenuItem } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import ElevatedButton from 'ui-component/buttons/ElevatedButton';

const GeneralSettingsPage = () => {
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '' });
  const [preferences, setPreferences] = useState({ theme: 'light', language: 'English' });
  const [notifications, setNotifications] = useState({ email: true, push: false });
  const [security, setSecurity] = useState({ twoFactorAuth: false, changePassword: '' });
  const [billing, setBilling] = useState({ paymentMethod: 'credit', billingAddress: '' });
  const [teamSettings, setTeamSettings] = useState({ role: '', inviteTeamMember: '' });

  const [loading, setLoading] = useState(false);

  const handleChange = (setter) => (e) => setter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSwitchChange = (setter) => (e) => setter((prev) => ({ ...prev, [e.target.name]: e.target.checked }));

  const handleUpdate = (section) => {
    setLoading(true);
    console.log(`Updating ${section} settings...`);
    // Call your API here
    setTimeout(() => setLoading(false), 1000); // Simulate API call
  };

  return (
    <Box sx={{ maxWidth: 'auto', margin: '0 auto', padding: 0 }}>
      {/* Personal Info Card */}
      <MainCard
        variant="outlined"
        sx={{ marginBottom: 2 }}
        title="Personal Information"
        secondary={<ElevatedButton title="Update" onClick={() => handleUpdate('personal info')} loading={loading} />}
      >
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} sm={6} md={4}>
            <TextField
              label="Name"
              name="name"
              value={personalInfo.name}
              onChange={handleChange(setPersonalInfo)}
              variant="outlined"
              size="small"
              fullWidth
              inputProps={{ style: { height: '20px' } }} // Reduced height
            />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <TextField
              label="Email"
              name="email"
              value={personalInfo.email}
              onChange={handleChange(setPersonalInfo)}
              variant="outlined"
              size="small"
              fullWidth
              inputProps={{ style: { height: '20px' } }} // Reduced height
            />
          </Grid>
        </Grid>
      </MainCard>

      <Divider sx={{ marginY: 2 }} />

      {/* Preferences Card */}
      <MainCard
        variant="outlined"
        sx={{ marginBottom: 2 }}
        title="Preferences"
        secondary={<ElevatedButton title="Update" onClick={() => handleUpdate('preferences')} loading={loading} />}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Select
              label="Theme"
              name="theme"
              value={preferences.theme}
              onChange={handleChange(setPreferences)}
              variant="outlined"
              size="small"
              fullWidth
            >
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select
              label="Language"
              name="language"
              value={preferences.language}
              onChange={handleChange(setPreferences)}
              variant="outlined"
              size="small"
              fullWidth
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </MainCard>

      <Divider sx={{ marginY: 2 }} />

      {/* Notifications Card */}
      <MainCard
        variant="outlined"
        sx={{ marginBottom: 2 }}
        title="Notification Settings"
        secondary={<ElevatedButton title="Update" onClick={() => handleUpdate('notifications')} loading={loading} />}
      >
        <FormControlLabel
          control={<Switch checked={notifications.email} name="email" onChange={handleSwitchChange(setNotifications)} />}
          label="Email Notifications"
        />
        <FormControlLabel
          control={<Switch checked={notifications.push} name="push" onChange={handleSwitchChange(setNotifications)} />}
          label="Push Notifications"
        />
      </MainCard>

      <Divider sx={{ marginY: 2 }} />

      {/* Security Card */}
      <MainCard
        variant="outlined"
        sx={{ marginBottom: 2 }}
        title="Security Settings"
        secondary={<ElevatedButton title="Update" onClick={() => handleUpdate('security')} loading={loading} />}
      >
        <FormControlLabel
          control={<Switch checked={security.twoFactorAuth} name="twoFactorAuth" onChange={handleSwitchChange(setSecurity)} />}
          label="Two-Factor Authentication"
        />
        <TextField
          label="New Password"
          type="password"
          name="changePassword"
          value={security.changePassword}
          onChange={handleChange(setSecurity)}
          fullWidth
          variant="outlined"
          size="small"
          inputProps={{ style: { height: '20px' } }} // Reduced height
        />
      </MainCard>

      <Divider sx={{ marginY: 2 }} />

      {/* Billing Information Card */}
      <MainCard
        variant="outlined"
        sx={{ marginBottom: 2 }}
        title="Billing Information"
        secondary={<ElevatedButton title="Update" onClick={() => handleUpdate('billing')} loading={loading} />}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Select
              label="Payment Method"
              name="paymentMethod"
              value={billing.paymentMethod}
              onChange={handleChange(setBilling)}
              variant="outlined"
              size="small"
              fullWidth
            >
              <MenuItem value="credit">Credit Card</MenuItem>
              <MenuItem value="paypal">PayPal</MenuItem>
              <MenuItem value="bank">Bank Transfer</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Billing Address"
              name="billingAddress"
              value={billing.billingAddress}
              onChange={handleChange(setBilling)}
              variant="outlined"
              size="small"
              fullWidth
              inputProps={{ style: { height: '20px' } }} // Reduced height
            />
          </Grid>
        </Grid>
      </MainCard>

      <Divider sx={{ marginY: 2 }} />

      {/* Team Settings Card */}
      <MainCard
        variant="outlined"
        sx={{ marginBottom: 2 }}
        title="Team Settings"
        secondary={<ElevatedButton title="Invite" onClick={() => handleUpdate('team')} loading={loading} />}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Role"
              name="role"
              value={teamSettings.role}
              onChange={handleChange(setTeamSettings)}
              variant="outlined"
              size="small"
              fullWidth
              inputProps={{ style: { height: '20px' } }} // Reduced height
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Invite Team Member"
              name="inviteTeamMember"
              value={teamSettings.inviteTeamMember}
              onChange={handleChange(setTeamSettings)}
              variant="outlined"
              size="small"
              fullWidth
              inputProps={{ style: { height: '20px' } }} // Reduced height
            />
          </Grid>
        </Grid>
      </MainCard>
    </Box>
  );
};

export default GeneralSettingsPage;
