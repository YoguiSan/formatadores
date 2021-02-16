const mockCurrentDate = (date = new Date('2020-01-01')) => {
  const now = date?.getTime();
  Date.now = jest.spyOn(Date, 'now').mockImplementation(() => now);
  return now;
};

const TestConfig = {
  mockCurrentDate,
};

export default TestConfig;
