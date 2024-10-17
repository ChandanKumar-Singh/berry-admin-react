import React, { useState } from 'react';
import {
  TextField,
  Switch,
  Typography,
  Divider,
  Box,
  Grid,
  FormControlLabel,
  Select,
  MenuItem,
  InputAdornment,
  IconButton
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import ElevatedButton from 'ui-component/buttons/ElevatedButton';
import { Lock, LockOpen, Visibility, VisibilityOff } from '@mui/icons-material';
import { useTheme } from '@emotion/react';

const GeneralSettingsPage = () => {
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '' });
  const [preferences, setPreferences] = useState({ theme: 'light', language: 'English' });
  const [notifications, setNotifications] = useState({ email: true, push: false });
  const [security, setSecurity] = useState({ twoFactorAuth: false, changePassword: '', confirmPassword: '' });
  const [billing, setBilling] = useState({ paymentMethod: 'credit', billingAddress: '' });
  const [teamSettings, setTeamSettings] = useState({ role: '', inviteTeamMember: '' });

  const [loading, setLoading] = useState(false);

  const handleChange = (setter) => (e) => setter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSwitchChange = (setter) => (e) => setter((prev) => ({ ...prev, [e.target.name]: e.target.checked }));

  /// security
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleUpdate = (section) => {
    setLoading(true);
    console.log(`Updating ${section} settings...`);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <Box sx={{ maxWidth: 'auto', margin: '0 auto', padding: 0 }}>
      {/* Personal Info Card */}
      {InformationCard()}

      <Divider sx={{ marginY: 2 }} />

      {/* Preferences Card */}
      {PreferenceCard()}

      <Divider sx={{ marginY: 2 }} />

      {/* Notifications Card */}
      {NotificationSettingsCard()}

      <Divider sx={{ marginY: 2 }} />

      {/* Security Card */}
      {SecurityCard()}

      <Divider sx={{ marginY: 2 }} />

      {/* Billing Information Card */}
      {BillingCard()}

      <Divider sx={{ marginY: 2 }} />

      {/* Team Settings Card */}
      {TeamSettingsCard()}
    </Box>
  );

  function TeamSettingsCard() {
    return (
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
    );
  }

  function BillingCard() {
    return (
      <MainCard
        variant="outlined"
        sx={{ marginBottom: 2 }}
        title="Billing Information"
        secondary={<ElevatedButton title="Update" onClick={() => handleUpdate('billing')} loading={loading} />}
      >
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={6} md={5}>
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
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              multiline
              rows={4}
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
    );
  }

  function SecurityCard() {
    return (
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
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              label="New Password"
              type={showPassword ? 'text' : 'password'}
              name="changePassword"
              value={security.changePassword}
              onChange={handleChange(setSecurity)}
              fullWidth
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: TooglePasswordVisibilityButton(toggleShowPassword, showPassword)
              }}
              inputProps={{ style: { height: '20px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={security.confirmPassword}
              onChange={handleChange(setSecurity)}
              fullWidth
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: TooglePasswordVisibilityButton(toggleShowConfirmPassword, showConfirmPassword)
              }}
              inputProps={{ style: { height: '20px' } }}
            />
          </Grid>
        </Grid>
      </MainCard>
    );
  }

  function NotificationSettingsCard() {
    return (
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
    );
  }

  function PreferenceCard() {
    return (
      <MainCard
        variant="outlined"
        sx={{ marginBottom: 2 }}
        title="Preferences"
        secondary={<ElevatedButton title="Update" onClick={() => handleUpdate('preferences')} loading={loading} />}
      >
        <Grid container spacing={1}>
          <Grid item xs={6} sm={4}>
            <Select
              label="Theme"
              name="theme"
              value={preferences.theme}
              onChange={handleChange(setPreferences)}
              variant="outlined"
              size="small"
              fullWidth
            >
              <MenuItem value="system">System</MenuItem>
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6} sm={4}>
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
    );
  }

  function InformationCard() {
    return (
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
    );
  }
};

export default GeneralSettingsPage;
function TooglePasswordVisibilityButton(toggleShowConfirmPassword, showConfirmPassword) {
  const theme = useTheme();
  const sx = {
    // fontSize: theme.typography.h3.fontSize,
    // color: theme.palette.grey[500],
    // '&:hover': { color: 'grey.700' }
  };
  return (
    <InputAdornment position="end">
      <IconButton onClick={toggleShowConfirmPassword} edge="end">
        {showConfirmPassword ? <VisibilityOff sx={sx} /> : <Visibility sx={sx} />}
      </IconButton>
    </InputAdornment>
  );
}
