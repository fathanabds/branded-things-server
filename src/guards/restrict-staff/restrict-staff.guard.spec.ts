import { RestrictStaffGuard } from './restrict-staff.guard';

describe('RestrictStaffGuard', () => {
  it('should be defined', () => {
    expect(new RestrictStaffGuard()).toBeDefined();
  });
});
