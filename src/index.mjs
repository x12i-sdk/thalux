import assert from 'node:assert/strict';
import { transformData } from '@x12i/thalux';
const map = { protocolVersion: 'thalux-map/1', mapId: 'fixture-tasks', version: '1.0.0',
  source: { namespace: 'fixture/tasks' }, targetModel: { id: 'x12i.business-truth-planes', version: '1' },
  collections: [{ id: 'tasks', projections: [{ id: 'task', target: { kind: 'business-object', plane: 'work', family: 'work-item' },
    fields: { title: { op: 'path', path: 'title' }, status: { op: 'path', path: 'status' } },
  }] }],
};
const request = { tenantId: 'fixture-tenant', map, records: [{ collectionId: 'tasks', sourceRecordId: 'task-1', recordedAt: '2026-01-01T00:00:00Z', data: { title: 'Review example', status: 'open' } }] };
const result = await transformData(request);
assert.equal(result.status, 'completed');
assert.equal(result.objects[0].title, 'Review example');
assert.equal(result.objects[0].provenance.sourceRecordId, 'task-1');
assert.equal(result.objects[0].id, (await transformData(request)).objects[0].id);
console.log(result);
